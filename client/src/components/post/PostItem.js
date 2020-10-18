import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onLikeClick(id) {
    this.props.addLike(id);
  }
  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

//   findUserLike() {
//     const { auth } = this.props;
//     if (likes.filter((like) => like.user === auth.user.id).length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   renderLiking=()=>{
// const LikesDislikes = ''


//   }

  render() {
    const { post, auth, showActions } = this.props;
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
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <div className='row'>
                      <div className='col-md-4 '>
                        <Link to='/post'>
                          <img
                            className='postFeedImg d-none d-md-block'
                            src='http://res.cloudinary.com/socialconnexion/image/upload/v1601089748/samples/food/spices.jpg'
                            alt=''
                          />
                        </Link>
                      </div>
                      <div className='col-md-8'>
                        <p className='post-caption'>
                          <b>{`${post.name}\'s post:`} </b>
                          {post.text}
                        </p>
                        <span>
                          <button>
                            <i className='far fa-heart'></i> 12 likes{' '}
                            <i className='far fa-comment-dots'></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
