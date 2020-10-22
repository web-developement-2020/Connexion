import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, removeLike } from '../../actions/postActions';
import Profile from '../profile/Profile';

class IsLike extends Component {
  constructor() {
    super();
    this.state = {
      errors:{},
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
    const { postId, likes } = this.props;
    return (
      <span>
        {this.isLike(postId, likes)}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,

});
export default connect(mapStateToProps, { addLike, removeLike })(IsLike);
