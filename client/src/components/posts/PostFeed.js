//get {posts, profile} from React Store

import React, { Component, Fragment } from 'react';
import PostItem from './PostItem';

class PostFeed extends Component {
  feedPost = () => {
    const { posts, profile, user } = this.props;
    if (profile.following.length > 0) {
      return profile.following.map((follow) => {
        return posts.map((post) => {
          if (follow.user_id === post.user && post.user !== user.id) {
            return <PostItem key={post._id} post={post} />;
          }
          return null;
        });
      });
    } else {
      return posts.map((post) => {
        return <PostItem key={post._id} post={post} />;
      });
    }
  };

  render() {
    return <Fragment>{this.feedPost()}</Fragment>;
  }
}
export default PostFeed;
