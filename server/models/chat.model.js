const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    messages : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MessageModel'
    }],
    room : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RoomModel',
        required: true
    },
   
}, {timestamps: true});


module.exports = mongoose.model('ChatModel', ChatSchema);