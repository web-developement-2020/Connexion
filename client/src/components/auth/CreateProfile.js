import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class CreateProfile extends Component {
  constructor(){
    super();
    //Local state
    this.state = {
      handle:'',
      bio:'',
      status:'',
      skills:[],
      company:'',
      website:'',
      location:'',
      githubusername:'',
      social:{},
      
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value} )
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      handle: this.state.handle,
      bio: this.state.bio,
      status: this.state.status,
      skills: this.state.skills,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      githubusername:  this.state.githubusername,
      social: this.state.social
    
    };

    axios
      .post('/api/profile', profile)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const {errors} = this.state;

    return (
      <div className="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <a href="dashboard.html" className="btn btn-light">
              Go Back
            </a>
            <h1 className="display-4 text-center">Create Your Profile</h1>
          
            <small className="d-block pb-3">* = required field</small>
            <form action="add-experience.html">
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="* Profile handle" name="handle" required />
                <small className="form-text text-muted">A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)</small>
              </div>
        <div className="form-group">
                <textarea className="form-control form-control-lg" placeholder="A short bio of yourself" name="bio"></textarea>
                <small className="form-text text-muted">Tell us a little about yourself</small>
              </div>
              <div className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="* Status" name="status" required />
                <small className="form-text text-muted">Give us an idea of where you are at in your career</small>
              </div>
        <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="* Skills" name="skills" required />
                <small className="form-text text-muted">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Company" name="company" />
                <small className="form-text text-muted">Could be your own company or one you work for</small>
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Website" name="website" />
                <small className="form-text text-muted">Could be your own or a company website</small>
              </div>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Location" name="location" />
                <small className="form-text text-muted">City & state suggested (eg. Boston, MA)</small>
              </div>
              
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Github Username" name="githubusername" />
                <small className="form-text text-muted">If you want your latest repos and a Github link, include your username</small>
              </div>
              
  
              <div className="mb-3">
                <button type="button" className="btn btn-light">Add Social Network Links</button>
                <span className="text-muted">Optional</span>
              </div>
  
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fab fa-twitter"></i>
                  </span>
                </div>
                <input type="text" className="form-control form-control-lg" placeholder="Twitter Profile URL" name="twitter" />
              </div>
  
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fab fa-facebook"></i>
                  </span>
                </div>
                <input type="text" className="form-control form-control-lg" placeholder="Facebook Page URL" name="facebook" />
              </div>
  
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fab fa-linkedin"></i>
                  </span>
                </div>
                <input type="text" className="form-control form-control-lg" placeholder="Linkedin Profile URL" name="linkedin" />
              </div>
  
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fab fa-youtube"></i>
                  </span>
                </div>
                <input type="text" className="form-control form-control-lg" placeholder="YouTube Channel URL" name="youtube" />
              </div>
  
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fab fa-instagram"></i>
                  </span>
                </div>
                <input type="text" className="form-control form-control-lg" placeholder="Instagram Page URL" name="instagram" />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  

      );
    }
  }
  
  export default CreateProfile;
  