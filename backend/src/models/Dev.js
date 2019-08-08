const {Schema, Model} = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    type: String,
    required
  },
  likes: [{
    type: Schema.Types.ObjectID,
    ref: 'Dev'
  }],
  dislikes: [{
    type: Schema.Types.ObjectID,
    ref: 'Dev'
  }],
}, {timeStamp: true});

module.exports = model('Dev', DevSchema);