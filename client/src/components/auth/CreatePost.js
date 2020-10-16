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
      <div className='container col-lg-6 col-md-9 col-sm-9'>
        <form action='postfeed.html'>
          <div className='form-group'>

            <img src={this.state.imageURL}
                className="rounded mx-auto d-block col-11 mb-3"
                alt={this.state.caption}
                id="upload-preview"/>

            <label for='inputURL'>URL of image</label>
            <input
              type='text'
              className='form-control'
              id='inputURL'
              placeholder='http://www.thisiswheremyphotois.com/photo.jpg'
              name='imageURL'
              value={this.state.imageURL}
              onChange={this.onChange}
            ></input><span>Or</span>
              <div className="form-group">
                <label for="exampleFormControlFile1">Select an image on your device</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
              </div>
          </div>
          <div className='form-group'>
            <label for='inputCaption'>Caption</label>
            <input
              type='text'
              className='form-control'
              id='inputCaption'
              placeholder='Write a caption'
              name='caption'
              value={this.state.caption}
              onChange={this.onChange}
            ></input>
          </div>
        </form>
        <div className='container mx-auto d-flex justify-content-around align-items-center mt-4'>
        <button type='submit' className='btn btn-light btn-lg bg-light btn-outline-dark btn-block mt-4 col-5 align-self-center'>
          Submit
        </button>
        </div>
      </div>
    );
  }
}
export default CreatePost;
