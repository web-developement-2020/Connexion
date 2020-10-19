// render Post item

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, removeLike } from '../../actions/postActions';
import Profile from '../profile/Profile';

class PostItem extends Component {
  constructor() {
    super();
    this.state = {
      islike: true,
    };
  }
  onLikeClick = (e, id) => {
    e.preventDefault();
    this.props.addLike(id);
  };

  onUnlikeClick = (e, id) => {
    e.preventDefault();
    this.props.removeLike(id);
  };

  isLike = (id, likes) => {
    const { auth } = this.props;
    let likePost =
      likes.filter((like) => like.user === auth.user.id).length > 0
        ? true
        : false;

    if (likePost) {
      return (
        <span onClick={(e) => this.onUnlikeClick(e, id)}>
          <i className='fas fa-heart'></i> {likes.length} likes{' '}
        </span>
      );
    } else {
      return (
        <span onClick={(e) => this.onLikeClick(e, id)}>
          <i className='far fa-heart'></i> {likes.length} likes{' '}
        </span>
      );
    }
  };

  render() {
    const { post } = this.props;
    const { profile } = this.props;

    console.log('***post');
    console.log(post);
    console.log(post._id);
    return (
      <li key={post._id} className='list-group-item'>
        <div className='row'>
          <div className='col-sm-2'>
            <Link to={`/posts/${post._id}`}>
              <img className='postFeedImg' src={post.image} alt='' />
            </Link>
          </div>
          <div className='col-sm-10'>
            <p className='post-caption'>
              <b>{post.name}'s post: </b> {post.text}
            </p>
            <span className='postIcon'>
              {this.isLike(post._id, post.likes)}
              <Link to={`/posts/${post._id}`}>
                <i className='far fa-comment-dots'></i>
              </Link>
            </span>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
