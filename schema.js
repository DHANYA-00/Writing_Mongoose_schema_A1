const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    default: ['user']
  },
  profile: {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    age: {
      type: Number,
      min: 0
    }
  },
  lastLogin: {
    type: Date,
    default: null
  }
});

const User = mongoose.model('User', userSchema);
module.exports= User;