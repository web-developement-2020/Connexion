import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import { followUser, unfollowUser } from '../../actions/profileActions';

class AllProfiles extends Component {
  
  onFollowClick = (e, _id) => {
    e.preventDefault();
    this.props.followUser(this.props.profile.profile.user._id);
    window.location.reload(false);
  }

  onUnfollowClick = (e, user_id) => {
  e.preventDefault();
  this.props.unfollowUser(this.props.profile.profile.user._id);
  window.location.reload(false);
}
  
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  isFollowing = () =>{
    let isFollow =
      this.props.profile.profile.followers.filter((follower) => follower.user_id === this.props.auth.user.id).length > 0
        ? true
        : false;

    console.log('isFollow:', isFollow);
    console.log(this.props.auth.user.id)

    if (isFollow) {
      return (
        <div className="mb-4">
         <button id="unfollow-user" className="btn bg-light btn-outline-dark p-1"
         onClick={(e) => this.onUnfollowClick(e, this.props.profile.profile)}>Unfollow {this.props.profile.profile.user.name}</button>
        </div>
      )
    } else {
      return (
        <div className="mb-4"
            onClick={(e) => this.onFollowClick(e, this.props.profile.profile)}>
                    <button id="follow-user" className="btn btn-orange btn-outline-light p-1">Follow {this.props.profile.profile.user.name}</button>
        </div>
      );
    };
  };


  render() {
    const { profile, loading } = this.props.profile;
    const { user } = this.props.profile;
    let profileContent;
    let profileCard;
    let socialLinks;

    if (profile === null || loading) {
      return(
      <Spinner />);
    } else if (Object.keys(profile).length > 0){

      console.log('profile:', this.props.profile.profile)
      console.log('followers', this.props.profile.profile.followers)
      
      const href = window.open.href=(`${profile.website}`);
        
      profileCard=(
        <div className='card card-body mb-3 pl-5'>
          {isEmpty(profile.location) ? null : (
          <div className='row location'>
            <h5 className="mr-1">Location:</h5>
            <p>{profile.location}</p>
          </div>
          )}  
          {isEmpty(profile.bio) ? null : (
          <div className='row bio'>
            <h5 className="mr-1">Bio:</h5>
            <p>{profile.bio}</p>
          </div>)}
        </div>
        );

      socialLinks=(
          <div className='card card-body mb-3 pl-5'>
            <div className='row social-links d-flex justify-content-around'>
            
            {isEmpty(profile.social && profile.social.facebook) ? null : (
              <a className="social-link" href={profile.social.facebook} rel="noopener noreferrer">
                <i className="fab fa-facebook-square"></i>
              </a>
            )}
            {isEmpty(profile.social && profile.social.twitter) ? null : (
              <a className="social-link" rel="noopener noreferrer" href={profile.social.twitter}>
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {isEmpty(profile.social && profile.social.instagram) ? null : (
              <a className="social-link" rel="noopener noreferrer" href={profile.social.instagram}>
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {isEmpty(profile.social && profile.social.linkedin) ? null : (
              <a className="social-link" rel="noopener noreferrer" href={profile.social.linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {isEmpty(profile.social && profile.social.youtube) ? null : (
              <a className="social-link" rel="noopener noreferrer" href={profile.social.youtube}>
                <i className="fab fa-youtube"></i>
              </a>
            )}
            {isEmpty(profile.website) ? null :(
              <a className="social-link" rel="noopener noreferrer" href={profile.website}>
              <i className="fas fa-globe"></i>
            </a>
            )}
            </div>
          </div>
        );
       }

    
          
      


    return (
      <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light btn-outline-dark p-2 mb-3 ml-4 float-left">
                Back To Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>

          <div>
        <div className='post'>
          <div className='container'>
            <div className='row'>
            <div className='card card-body mb-3 bg-light'>
             <div>
                <div className='row'>
                  <div className='col-md-2 profile-content'>
                   
                      <img
                        className='prof-img-lg rounded-circle d-none d-md-block'
                        src={profile.user.avatar}
                        alt='user avatar'
                      />
                  </div>
                  <div className='col-md-10'>
                    <h2 className='header' align='right'>
                      <i className='fas fa-user'></i> Profile
                    </h2>
                    <h3 className='card-title profile-name'>{profile.user.name}</h3>
        
                    <h5 className='card-title profile-handle'>( {profile.handle} )</h5>

                  </div>
                </div>
                <div className='row followers-following'>
                  <div className='col-md-2'></div>
                  <div className='col-md-3'>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      className='bi bi-people-fill'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'
                      />
                    </svg>
                    <small> followers: {profile.followers.length}
                      </small>
                  </div>
                  <div className='col-md-3'>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      className='bi bi-people'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'
                      />
                    </svg>
                  <small> following:{profile.following.length} </small>
                  </div>
                  <span className="like-unlike">
                    {this.isFollowing()}
                  </span>
                    

                  </div>

                {profileCard}



                {socialLinks}  

            </div>
        </div>
        </div></div></div></div>
      </div>
<<<<<<< HEAD
=======
    // </div>





     
>>>>>>> 4c3aa296395d85c37d393e29b3ef0a6e0a264522
    );
  }
}

 AllProfiles.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  isFollow: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  isFollow: state.isFollow,
});

export default connect(mapStateToProps, { getProfileByHandle, followUser, unfollowUser })(AllProfiles);
