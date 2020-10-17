import React, { Component } from 'react';
//import {Image, CloudinaryContext} from 'cloudinary-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
import classnames from 'classnames';


class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.widget = window.cloudinary.createUploadWidget({
      cloudName: 'socialconnexion',
      uploadPreset: 'st8gcaqq',
      theme: 'minimal',
      inlineContainer: document.getElementById('upload-widget')

    }, (error, result) => {
      if (!error && result && result.event === "success"){
        this.setState({ image: result.info.secure_url }) 
             
        console.log(result.info.secure_url)
       }
     }
    )

    //Local state
    this.state = {
      image: '',
      text: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
      
    
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
      image: this.state.image,
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    };

    this.props.addPost(newPost);
    this.setState({image: '', text: ''});
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  
  render() {

    const postPreview = (        
      <div id="post-preview" className="">
        <div className='card card-body mb-3 col-md-10 mx-auto'>
        <div className='row'>
                <div className='col-md-2 profile-content'>
                <img
                      className='profile-img rounded-circle d-none d-md-block'
                      src={this.props.auth.user.avatar}
                      alt=''
                    />
                </div>
          <div className='col-md-10'>
                  <h2 align='right' className='header'>
                    <i className='fas fa-photo-video'></i> Post
                  </h2>
                  <h6 className='card-title'>{this.props.user.name}</h6>
                  <p className='card-text'>
                    {this.state.text}
                  </p>
                </div>
              </div>
              <div className='container'>
                <div className='row justify-content-center post-img-card'>
                  <div className='col-8 post-img' align='center'>
                    <img
                      id='upload-preview'
                      src={this.state.image}
                      style={{width: '400px', maxWidth: '100%'}}
                      className='card-img-bottom'
                      alt={this.state.text}
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
        );

    const { errors } = this.state;

    return (

      <div className='container'>
      {this.state.image || this.state.text? postPreview : null}

        <div className='media-upload col-11 mx-auto'>

        <form onSubmit={this.onSubmit}>
            <div id='upload-widget'></div>
            <button id="upload_widget" className="btn-light btn-lg bg-light btn-outline-dark btn-block col-3 mb-3 " onClick={() => this.widget.open()}>
              Upload image
            </button>

          <div className='form-group'>
            <label htmlFor='inputText'>Caption</label>
            <textarea
              className={classnames("form-control", {"is-invalid": errors.name,})} 
              id='inputText'
              placeholder='Write a caption'
              name='text'
              type='text'
              rows= '4'
              value={this.state.text}
              onChange={this.onChange}
            ></textarea>
          </div>


        <div className='container mx-auto d-flex justify-content-around align-items-center mt-4'>
        <button type='submit' className='btn btn-light btn-lg bg-light btn-outline-dark btn-block mt-4 col-5 align-self-center'>
          Submit
        </button>
        </div>
      </form>
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
