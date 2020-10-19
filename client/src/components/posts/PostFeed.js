//get {posts, profile} from React Store

import React, { Component, Fragment } from 'react';
import PostItem from './PostItem';

class PostFeed extends Component {
  feedPost = () => {
    const { posts, profile } = this.props;

    if (profile.following.length > 0) {
      return profile.following.map((follow) => {
        return posts.map((post) => {
          if (follow.user_id === post.user) {
            return <PostItem post={post} />;
          }
        });
      });
    } else {
      return posts.map((post) => {
        return <PostItem post={post} />;
      });
    }
  };

  render() {
    return <Fragment>{this.feedPost()}</Fragment>;
  }
}
export default PostFeed;
