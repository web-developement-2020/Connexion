import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import CommentGallery from './CommentGallery';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';
import { get } from '../../actions/postActions';
import '../../App.css';

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className='card card-body mb-3'>
          <div className='row'>
            <div className='col-md-2 profile-content'></div>
            <div className='col-md-10'>
              <h2 align='right' className='header'>
                <i className='fas fa-photo-video'></i> Post
              </h2>
            </div>
          </div>

          <Link to='/posts' className='back'>
            <i
              className='fas fa-arrow-circle-left'
              style={{ color: 'orange' }}
            ></i>
            {/* <span> to posts</span> */}
          </Link>
          <CommentGallery
            postId={post._id}
            postImage={post.image}
            likes={post.likes}
          />
          <CommentForm postId={post._id} />
          <div className='row'>
            <div className='col-md-12'>
            <ul className='list-group'>
              <CommentFeed postId={post._id} comments={post.comments} /></ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className='container'>
        <div className='row'>{postContent}</div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
