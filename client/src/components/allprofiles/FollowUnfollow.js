import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, followUser, unfollowUser } from '../../actions/profileActions';
import Spinner from '../common/Spinner';

class FollowUnfollow extends Component {
  constructor() {
    super();
    this.state = {
      errors:{},
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
    
  }

  render() {
    const { user } = this.props.auth;
    const { loading } = this.props.profile;
    const { profile } = this.props.profile;
    
    // console.log(this.props.profile.profile);
    console.log('p:', this.props.profile);
    console.log('prof:', profile);
    console.log('u', user);
    // console.log(profile.following);
   

    if(Object.keys(profile).length > 0) {

   const { profile } = this.props.profile;


  function onFollowClick(e, profile){
      e.preventDefault();
      this.props.followUser(profile);
   }

  function onUnfollowClick(e, profile){
    e.preventDefault();
    this.props.unfollowUser(profile);
 }

 
 let isFollow;
 
  function isFollowing(){
    isFollow =
      profile.followers.filter((follower) => follower.user_id === user.id).length > 0
        ? true
        : false;

    if (isFollow) {
      return (
        <div className="mb-4">
         <button id="follow-user" className="btn bg-light btn-outline-dark p-1"
         onClick={(e) => onUnfollowClick(e, profile)}>Unfollow {profile.user.name}</button>
        </div>
      )
    } else {
      return (
      
          <div className="mb-4"
            onClick={(e) => onFollowClick(e, profile)}>
                    <button id="follow-user" className="btn btn-orange btn-outline-light p-1">Follow {profile.user.name}</button>
        </div>
      )
    }
  }


    return (
      <div>
        {isFollowing(profile)}
      </div>
    )
    
    }
  }
}

FollowUnfollow.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, followUser, unfollowUser })(FollowUnfollow);