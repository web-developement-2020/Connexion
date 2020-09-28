import React, { Component } from 'react'

class CreatePost extends Component {
  constructor(){
    super();

    //Local state
    this.state = {
      imageURL: '',
      caption:'',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div class="container">
        <form action="postfeed.html">
          <div class="form-group">
            <label for="inputURL">URL of image</label>
            <input type="text" class="form-control" id="inputURL" placeholder="http://www.thisiswheremyphotois.com/photo.jpg" name="imageURL" value={this.state.imageURL} onChange={this.onChange}></input>
          </div>
          <div class="form-group">
            <label for="inputCaption">Caption</label>
            <input type="text" class="form-control" id="inputCaption" placeholder="Write a caption" name="caption" value={this.state.caption} onChange={this.onChange}></input>
          </div>
        </form>
      <button type="submit" class="btn btn-info btn-block mt-4">Submit</button>
      </div>
    )
  }
}
export default CreatePost;