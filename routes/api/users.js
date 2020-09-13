const express = require('express');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const gravatar = require('gravatar');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');

const router = express.Router();

// @route POST /api/users
// @desc Register user
// @access Public

router.post('/register', (req, res) => {
  // console.log('req: ', req.body);
  // console.log('res: ', res);
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log('errors: ', errors);
  console.log('isValid: ', isValid);

  if (!isValid) {
    return res.status(400).json(errors);
  }


  User.findOne({ email: req.body.email }).then((user) => {
    console.log('user: ', user);
    if (user) {
      return res.status(400).json({ email: 'Email already exist' });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'g',
        d: 'mm',
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        console.log('salt: ', salt);
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          console.log('newUser: ', newUser);
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST /api/users
// @desc Login user
// @access Public

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then((user) => {
      if (!user) return res.status(404).json({ email: 'user not found' });

      //check the password

      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            //User matched and create a token
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
            };

            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                console.log(token);
                return res.json({ token: `Bearer ` + token });
              }
            );
          } else {
            return res.status(400).json({ password: 'Invalid password' });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

//'current' route is for testing passport in the server side before we build UI.
// @route GET /api/users
// @desc Return the current user
// @access Private

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    return res.json(req.user);
  }
);
module.exports = router;
