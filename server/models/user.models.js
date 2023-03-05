const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Enter a valid email'],
        required: true
    },
    pin: {
        type: String,
        max: [4, '4-digit pin max'],
        required: true
    }
}, {timestamps: true});


UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.pin = await bcrypt.hash(this.pin, salt);

})

UserSchema.methods.comparePin = async function (pin){
    is_val = await bcrypt.compare(pin, this.pin);
    console.log(is_val);
    return is_val;
}

UserSchema.methods.createToken = async function(){
    const token = await jwt.sign({id: this._id}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRE
    });


    return token;
}


module.exports = mongoose.model('UserModel', UserSchema);