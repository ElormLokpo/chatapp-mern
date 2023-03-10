const mongoose = require('mongoose');

const FriendSchema = mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
   },
   friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
   }]
}, {timestamps: true});


module.exports = mongoose.model('FriendModel', FriendSchema);