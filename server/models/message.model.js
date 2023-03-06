const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    message : {
        type: String,
        required: true
    },
    chat : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatModel',
        required: true
    },
    time: {
        type: String
    },
    sender : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    }
}, {timestamps: true});


module.exports = mongoose.model('MessageModel', MessageSchema);