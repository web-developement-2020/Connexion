// ***** get public posts ************

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { post, posts, loading } = this.props.post;
    // console.log(posts);
    console.log(post);
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
                      <div className='col-md-2 '>
                        <a href='profile.html'>
                          <img
                            className='postFeedImg  d-none d-md-block'
                            src='http://res.cloudinary.com/socialconnexion/image/upload/v1601089748/samples/food/spices.jpg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='col-md-10'>
                        <p className='post-caption'>
                          <b>handle's post: </b>This post caption goes here This
                          post caption goes here This post caption goes here
                        </p>
                        <span>
                          <i className='far fa-heart'></i> 12 likes{' '}
                          <i className='far fa-comment-dots'></i>
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

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
