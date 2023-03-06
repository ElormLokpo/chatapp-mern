const mongoose = require('mongoose');

const FriendSchema = mongoose.Schema({
   friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'
   }]
}, {timestamps: true});


module.exports = mongoose.model('FriendModel', FriendSchema);