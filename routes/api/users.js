const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

//@route GET /api/users/test
//@desc Tests user js
//@access Public
router.get('/test', (req, res) => res.json({msg: 'User works'}));

//@route POST /api/users/register
//@desc Registers user
//@access Public
router.post('/register', (req, res) => {
  //find dupe email
  User.findOne({email: req.body.email})
    .then(user => {
      if (user){
        return res.status(400).json({email: 'Email already exists'})
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '2',
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password,
        });

//encrypting password
        bcrypt.genSalt(10, (err, salt) => {
          if(err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
          }
          )
        })

//integrating gravatar

      }
    })
    .catch();


});

module.exports = router;