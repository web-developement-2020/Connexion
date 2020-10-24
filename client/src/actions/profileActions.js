
import axios from 'axios';
import { useParams } from "react-router-dom";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER,
} from "./types";



// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

// Get profile by handle
export const getProfileByHandle = (handle) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res=>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null,

      })
    );
};

// export const getProfilesBySearch = (query) => (dispatch) => {
//   dispatch(setProfileLoading());

//   axios
//     .get(`/api/profile/search?q=${query}`)
//     .then((res) =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: GET_PROFILES,
//         payload: null,

//       })
//     );
// };

// Create Profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios

    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Get all profiles
export const getProfiles = () => dispatch => {

  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all")
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILES,
        payload: null

      })
    );
};

// Delete account & profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/profile")
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

//Follow profile
export const followUser = (_id) => (dispatch) => {
  axios
    .post(`/api/profile/user/${_id}/follow`)
    .then((res) => dispatch(getProfiles()))
    .catch((err) => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
}


//Unfollow profile
export const unfollowUser = (_id) => (dispatch) => {
  axios
    .delete(`/api/profile/user/${_id}/unfollow`)
    .then((res) => dispatch(getProfiles()))
    .catch((err) => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}




// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
