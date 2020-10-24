const express = require("express");
const passport = require("passport");
const router = express.Router();
const mongoose = require("mongoose");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");
// Load Validation
const validateProfileInput = require("../../validation/profile");
const { text } = require("body-parser");
const { escapeRegExp } = require("lodash");


// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name", "avatar"])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch((err) => res.status(404).json(err));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

//@route GET api/profile/search/:searchparams
//@desc Fuzzy search for handle
//@desc Public

router.get("/search", (req, res) => {
  const errors = {};
  console.log(req.query);
  
    if(req.query.search){
      //create regex
      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Profile.find({handle: regex}, function(err, foundprofiles){
      if(err){
        console.log(err);
      } else {
        console.log(foundprofiles);
      }
    }
    );
      
    }
});


router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;

    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;


    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then((profile) => {
          if (profile) {
            errors.handle = "That handle already exists";
            return res.status(400).json(errors);
          }
          // Save Profile
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        });
      }
    });
  }
);



//@route    GET api/profile
//@desc     Get current user profile
//@access   Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.json(404).json(err));
  }
);

//@route    GET api/profile/all
//@desc     Get all profiles
//@access   Public
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name", "avatar"])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch((err) => res.status(404).json(err));
});

//@route  GET api/profile/handle/:handle
//@desc   Get profile by handle
//@access Public

router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

//@route    GET api/profile/user/:user_id
//@desc     Get profile by user id
//@access   Public
router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

//@route  POST  api/profile/user/:user_id/follow
//@desc   Add user to current user's 'following' list & current profile's 'follower' list
//@access Private

router.post(
  '/user/:user_id/follow', 
  passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
Profile.findOne({user: req.params.user_id})
    .then(profile =>{
    console.log(profile);
   Profile.findOne({user: req.user.id})
      .then((profile) => {
        if (!profile)
        res.status(404).json({ profilenotfound: 'Cannot find your profile' });

        if(profile.following.filter((following) => following.user_id.toString() === req.params.user_id).length > 0)
        return res.status(400).json({alreadyfollowing:'User is already following this user'});
        
        profile.following.unshift({user_id: req.params.user_id});
        profile.save().then((profile) => res.json(profile)); 

      Profile.findOne({user: req.params.user_id})
        .then(profile =>{
          profile.followers.unshift({user_id: req.user.id });
          profile.save().then((profile) => console.log(profile));
        })
    })
      .catch(err => res.status(404).json({profilenotfound: 'Cannot find your profile'}));
    })
    .catch(err => console.log(err));
  }
)

// @route  POST  api/profile/user/:user_id/unfollow
// @desc   Remove user from current user's 'following' list & current profile's 'followers' list
// @access Private
// @route  DELETE  api/profile/user/:user_id/unfollow
// @desc   Remove user from current user's 'following' list
// @access Private
router.delete(
  "/user/:user_id/unfollow",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.params.user_id })
      .then((profile) => {
        Profile.findOne({ user: req.user.id })
          .then((profile) => {
            if (!profile)
              res
                .status(404)
                .json({ profilenotfound: "Cannot find your profile" });

            if (
              profile.following.filter(
                (following) =>
                  following.user_id.toString() === req.params.user_id
              ).length === 0
            ) {
              return res.status(400).json({
                notfollowing: "Cannot unfollow user you are not following",
              });
            }

            const removeIndex = profile.following
              .map((item) => item.user_id.toString())
              .indexOf(req.params.user_id);
            profile.following.splice(removeIndex, 1);
            profile.save()
            .then((profile) => res.json(profile));
          })
          .catch((err) =>
            res
              .status(404)
              .json({ profilenotfound: "Cannot find your profile" })
          );
      })
      .catch((err) => console.log(err));

      Profile.findOne({ user: req.user.id })
      .then((profile) => {
        Profile.findOne({ user: req.params.user_id })
          .then((profile) => {
            if (!profile)
              res
                .status(404)
                .json({ profilenotfound: "Cannot find this profile" });

            if (
              profile.followers.filter(
                (followers) =>
                  followers.user_id.toString() === req.user.id
              ).length === 0
            ) {
              return res.status(400).json({
                notfollowing: "Cannot remove from followers",
              });
            }

            const removeIndex = profile.followers
              .map((item) => item.user_id.toString())
              .indexOf(req.user.id);
            profile.followers.splice(removeIndex, 1);
            profile.save()
              .then((profile) => res.json(profile))
              .catch((err) => console.log(err));
          })
          .catch((err) =>
            res
              .status(404)
              .json({ profilenotfound: "Cannot find this profile" })
          );
      })
      .catch((err) => console.log(err));
  }
);
  

// @route   DELETE api/profile
// @desc    Delete profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>  
      res.json({ success: true })
      );
    });
  }
);

function escapeRegex(text){
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
