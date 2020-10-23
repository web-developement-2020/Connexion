import React, { Component, Fragment } from 'react';
class CommentGallery extends Component {
  render() {
    const { postImage } = this.props;

    const renderPost = () => {
      if (postImage) {
        return (
          <div className='container'>
            <div className='row justify-content-center post-img-card'>
              <div className='col-8 post-img' align='center'>
                <img
                  id='post'
                  src={postImage}
                  className='card-img-bottom'
                  alt='...'
                />
              </div>
            </div>
          </div>
        );
      }
    };

    return <Fragment>{renderPost()} </Fragment>;
  }
}

export default CommentGallery;
