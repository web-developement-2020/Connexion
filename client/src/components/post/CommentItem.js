import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteComment, addComment } from '../../actions/postActions';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <li class='list-group-item'>
        <div className='row' style={{ paddingBottom: '15px' }}>
          <div className='col-md-2 comment'>
            <Link to='/profile'>
              <img
                id='profile-mini'
                className='rounded-circle d-none d-md-block'
                src={comment.avatar}
                alt=''
              />
            </Link>
          </div>
          <div className='col-md-9'>
            <div className='comment-text'>
              {' '}
              <p className='card-text'>
                <small>{comment.text}</small>
              </p>{' '}
            </div>
          </div>
          <div className='col-md-1'>
            {comment.user === auth.user.id ? (
              <span>
                <i
                  onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                  className='fas fa-trash-alt'
                  style={{ color: 'red' }}
                />
              </span>
            ) : null}
          </div>
        </div>
      </li>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
