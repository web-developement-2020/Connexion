import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import { isEmpty } from 'lodash';

class ProfileCard extends Component {

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
    if(profile){
      console.log(profile.following);
    }

    if(profile === null || loading){
      return(
        <Spinner />
      )
    } else if (Object.keys(profile).length > 0) {

    

      const profileCard=(
        <div className='card card-body mb-3 pl-5'>
          
          {isEmpty(profile.bio) ? null : (
          <div className='row bio'>
            <h5 className="mr-1">Bio:</h5>
            <p>{profile.bio}</p>
          </div>)}
         
        </div>
        );

      

      return (
        <div>
        <div className='post'>
          <div className='container'>
            <div className='row'>
            <div className='card card-body mb-3 bg-light'>
             <div>
                <div className='row'>
                  <div className='col-md-2 profile-content'>
                    <Link to='/ProfileCard'>
                      <img
                        className='prof-img-lg rounded-circle d-none d-md-block'
                        src={user.avatar}
                        alt=''
                      />
                    </Link>
                  </div>
                  <div className='col-md-10'>
                    <h2 className='header' align='right'>
                      <i className='fas fa-user'></i> Profile
                    </h2>
                    <h3 className='card-title profile-name'>{user.name}</h3><h5 className='card-title profile-handle'>( {profile.handle} )</h5>

                  </div>
                </div>
                
                {isEmpty(profile.bio && profile.location)? null : (profileCard )}



               
            </div>
        </div>
        </div></div></div></div>)
      }
   }
}


ProfileCard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(
  ProfileCard
);
