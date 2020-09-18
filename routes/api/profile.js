const express = require('express');
const passport = require('passport');
const Profile = require('../../models/Profile');
const router = express.Router();

//@route POST /api/profile
//@desc create or edit your profile
//@access Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const profileFields = {};
    profileFields.user = req.user.id;

    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;

    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }

    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        if (profile) {
          // update

          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then((profile) => {
            res.json(profile);
          });
        } else {
          //create

          Profile.findOne({ handle: profileFields.handle }).then((profile) => {
            if (profile) {
              return res
                .status(400)
                .json({ handle: 'That handle already exists' });
            }

            //save profile
            new Profile(profileFields)
              .save()
              .then((profile) => {
                res.json(profile);
              })
              .catch((err) => console.log(err));
          });
        }
      })
      .catch((err) => console.log(err));
  }
);

//@route POST /api/profile/experience
//@desc Add experience to profile
//@access Private

router.post(
  '/experience',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (!profile) {
        return res
          .status(404)
          .json({ noprofile: "There's no profile for this user" });
      }

      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      };

      profile.experience.unshift(newExp);
      profile.save().then((profile) => {
        res.json(profile);
      });
    });
  }
);

//@route POST /api/profile/education
//@desc Add experience to profile
//@access Private

router.post(
  '/education',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (!profile) {
        return res
          .status(404)
          .json({ noprofile: "There's no profile for this user" });
      }

      const newEd = {
        school: req.body.school,
        degree: req.body.degree,
        fieldOfStudy: req.body.fieldOfStudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
      };

      profile.education.unshift(newEd);
      profile.save().then((profile) => {
        res.json(profile);
      });
    });
  }
);

//@route    GET api/profile
//@desc     Get current user profile
//@access   Private
router.get(
  '/',
  passport.authenticate('jwt', {session: false}),
  (req,res) => {
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
router.get('/all', (req, res) =>{
  const errors = {};

  Profile.find()
    .populate("user", ["name", "avatar"])
    .then((profiles) => {
      if(!profiles) {
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

//@route  POST  api/profile/handle/:handle/follow
//@desc   Add user to current user's 'following' list
//@access Private
router.post(
  '/handle/:handle/follow',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
  Profile.findById({user:req.user.id})
    .then(profile => {
      Profile.findOne({user: req.params.handle})
        .then(profile =>{

            if(profile.following.filter(following => following.user.toString() === req.user.handle).length > 0)
            {return res.status(400).json({alreadyfollowing: 'You are already following this user'});
            
            }
            profile.following.unshift({ user: req.user.id });
            post.save().then(post => res.json(following))
          })
      .catch(err => res.status(404).json({profilenotfound: 'The profile you are trying to follow was not found'}));
  } );
}
)

module.exports = router;
