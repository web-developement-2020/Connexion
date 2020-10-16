import React, { Component } from 'react';
import {Image, CloudinaryContext} from 'cloudinary-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
import {useDropzone} from 'react-dropzone'


class CreatePost extends Component {
  constructor(props) {
    super(props);

    //Local state
    this.state = {
      imageURL: '',
      caption: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
      
    this.widget = window.cloudinary.createUploadWidget({
      cloudName: 'socialconnexion',
      uploadPreset: 'st8gcaqq',
      uploadSignature: this.state.user,
      theme: 'minimal',
      inlineContainer: document.getElementById('upload-widget')
    }, (error, result) => {
      if (!error && result && result.event === "success"){console.log(
        result.info.secure_url)}

    }
    )
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      caption: this.state.caption,
      imageURL: this.state.imageURL,
      handle: user.handle,
      avatar: user.avatar,
      user: user
    };

    this.props.addPost(newPost);
    this.setState({imageURL: '', caption: ''});
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  render() {

    const { errors } = this.state;

    return (
      <div className='container col-lg-6 col-md-9 col-sm-9'>
        
        <div id='upload-widget'></div>
              <button id="upload_widget" className="cloudinary-button" onClick={() => this.widget.open()}>Upload files</button>

        <form>
          <div className='form-group'>

            <img src={this.state.imageURL}
                className="rounded mx-auto d-block col-11 mb-3"
                alt={this.state.caption}
                id="upload-preview"/>

            {/* <label for='inputURL'>URL of image</label>
            <input
              type='text'
              className='form-control'
              id='inputURL'
              placeholder='http://www.thisiswheremyphotois.com/photo.jpg'
              name='imageURL'
              value={this.state.imageURL}
              onChange={this.onChange}
            ></input><span>Or</span> */}
              {/* <div className="form-group">
                <label for="exampleFormControlFile1">Select an image on your device</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
              </div> */}
          </div>
          <div className='form-group'>
            <label htmlFor='inputCaption'>Caption</label>
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

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { addPost })(CreatePost);
