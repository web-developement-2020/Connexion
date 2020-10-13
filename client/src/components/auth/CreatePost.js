import React, { Component } from 'react';

class CreatePost extends Component {
  constructor() {
    super();

    //Local state
    this.state = {
      imageURL: '',
      caption: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div class='container col-lg-6 col-md-9 col-sm-9'>
        <form action='postfeed.html'>
          <div class='form-group'>

            <img src={this.state.imageURL}
                className="rounded mx-auto d-block col-11 mb-3"
                alt={this.state.caption}
                id="upload-preview"/>

            <label for='inputURL'>URL of image</label>
            <input
              type='text'
              class='form-control'
              id='inputURL'
              placeholder='http://www.thisiswheremyphotois.com/photo.jpg'
              name='imageURL'
              value={this.state.imageURL}
              onChange={this.onChange}
            ></input>
          </div>
          <div class='form-group'>
            <label for='inputCaption'>Caption</label>
            <input
              type='text'
              class='form-control'
              id='inputCaption'
              placeholder='Write a caption'
              name='caption'
              value={this.state.caption}
              onChange={this.onChange}
            ></input>
          </div>
        </form>
        <div class='container mx-auto d-flex justify-content-around align-items-center mt-4'>
        <button type='submit' class='btn btn-light btn-lg bg-light btn-outline-dark btn-block mt-4 col-5 align-self-center'>
          Submit
        </button>
        </div>
      </div>
    );
  }
}
export default CreatePost;
