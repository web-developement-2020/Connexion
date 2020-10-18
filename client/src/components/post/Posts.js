// ***** get followings' posts ************

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';
import { getCurrentProfile } from '../../actions/profileActions';
import { addLike, removeLike } from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCurrentProfile();
  }
  onLikeClick = (id) => {
    this.props.addLike(id);
  };

  onUnlikeClick = (id) => {
    this.props.removeLike(id);
  };

  isLike = (id, likes) => {
    const { auth } = this.props;
    let likePost;

    if (likes.length > 0) {
      likePost = likes.filter((like) => like.user === auth.user.id)
        ? true
        : false;
    }
    if (likePost) {
      return (
        <span onClick={this.onUnlikeClick.bind(this, id)}>
          <i className='fas fa-heart'></i> {likes.length} likes{' '}
        </span>
      );
    } else {
      return (
        <span onClick={this.onLikeClick.bind(this, id)}>
          <i className='far fa-heart'></i> {likes.length} likes{' '}
        </span>
      );
    }
  };

  renderContent = () => {
    const { posts, loading } = this.props.post;
    const { profile } = this.props.profile;
    // let followings = 0;

    if (profile === null || loading) return <Spinner />;
    if (profile.following.length > 0 && posts) {
      // let followings = profile.following.length;
      return profile.following.map((follow) => {
        return posts.map((post) => {
          let post_date = post.date.slice(0, 10);
          let today = new Date().toISOString().slice(0, 10);

          if (follow.user_id === post.user) {
            return (
              <li className='list-group-item' key={post._id}>
                <div className='row'>
                  <div className='col-sm-2'>
                    <Link to='profile'>
                      <img className='postFeedImg' src={post.image} alt='' />
                    </Link>
                  </div>
                  <div className='col-sm-10'>
                    <p className='post-caption'>
                      <b>{post.name}'s post: </b> {post.text}
                    </p>
                    <span className='postIcon'>
                      {this.isLike(post._id, post.likes)}
                      <Link to='/post'>
                        <i className='far fa-comment-dots'></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </li>
            );
          }
        });
      });
    }
  };


  render() {
    return (
      <div className='post'>
        <div className='container'>
          <div className='row'>
            <div className='card card-body mb-3'>
              <div className='row'>
                <div className='col-md-2 profile-content'></div>
                <div className='col-md-10'>
                  <h2 align='right' className='header'>
                    <i className='fas fa-photo-video'></i> Post Feed
                  </h2>
                </div>
              </div>
              <div className='container postfeed'>
                <ul className='list-group'>{this.renderContent()}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post,
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getPosts,
  getCurrentProfile,
  addLike,
  removeLike,
})(Posts);
