import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { deletePost } from '../../actions/postActions';

class CurrentPost extends Component {
  onDeleteClick(postId) {
    this.props.deletePost(postId);
  }

  renderPost = () => {
    const { posts, loading } = this.props;
    const { auth } = this.props;

    let postContent = '';
    if (posts === null || auth === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = posts.map((post) => {
        return (
          <li key={post._id} className='list-group-item'>
            <div className='row'>
              <div className='col-sm-2'>
                <img className='postFeedImg' src={post.image} alt='' />
              </div>
              <div className='col-sm-9'>
                <p className='post-caption'>{post.text}</p>
              </div>
              <div className='col-sm-1'>
                {post.user === auth.user.id ? (
                  <span className='postIcon'>
                    <i
                      onClick={() => this.onDeleteClick(post._id)}
                      className='fas fa-trash-alt'
                      style={{ color: '#e69138' }}
                    />
                  </span>
                ) : null}
              </div>
            </div>
          </li>
        );
      });
    }
    return postContent;
  };

  render() {
    return <Fragment>{this.renderPost()}</Fragment>;
  }
}

CurrentPost.propTypes = {
  deletePost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost })(CurrentPost);
