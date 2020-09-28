const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  following: [
    {user_id:{
      type: String,
      required: true
      },
      date:{
        type:Date,
        default:Date.now
      }
    }
  ]
});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
