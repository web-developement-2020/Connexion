import React, { Component } from 'react';
//import {Image, CloudinaryContext} from 'cloudinary-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
//import {useDropzone} from 'react-dropzone';


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
      if (!error && result && result.event === "success"){
        this.setState({ imageURL: result.info.secure_url })      
        console.log(result.info.secure_url)
       }
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

      <div className='container'>

        <div id="post-preview" className="">

          {/* <div className='card card-body mb-3 col-12'> */}
          
          <p className='card-text mx-3'>
           {this.state.caption}
          </p>
          <div className='row justify-content-center mx-3 mt-3'>

            <img src={this.state.imageURL}
                    className="rounded mx-auto d-block col-11 mb-3"
                    alt={this.state.caption}
                    id="upload-preview"
                    />
          </div>
        {/* </div> */}
        </div>
        <div className='media-upload col-11 mx-auto'>

            <div id='upload-widget'></div>
            <button id="upload_widget" className="btn-light btn-lg bg-light btn-outline-dark btn-block col-3 mb-3 " onClick={() => this.widget.open()}>
              Upload image
            </button>

        <form>
          <div className='form-group'>
            <label htmlFor='inputCaption'>Caption</label>
            <textarea
              className='form-control'
              id='inputCaption'
              placeholder='Write a caption'
              name='caption'
              rows= '4'
              value={this.state.caption}
              onChange={this.onChange}
            ></textarea>
          </div>
        </form>
        <div className='container mx-auto d-flex justify-content-around align-items-center mt-4'>
        <button type='submit' className='btn btn-light btn-lg bg-light btn-outline-dark btn-block mt-4 col-5 align-self-center'>
          Submit
        </button>
        </div>
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
