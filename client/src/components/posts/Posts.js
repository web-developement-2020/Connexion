// Get all posts and current user's profile

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';
import { getCurrentProfile } from '../../actions/profileActions';
import PostFeed from './PostFeed';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCurrentProfile();
  }

  renderContent = () => {
    const { posts, loading } = this.props.post;
    const { profile } = this.props.profile;

    if (posts === null || profile === null || loading) return <Spinner />;
    else {
      return <PostFeed posts={posts} profile={profile} />;
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

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  post:PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
  profile: state.profile,
});
export default connect(mapStateToProps, { getPosts, getCurrentProfile })(Posts);
