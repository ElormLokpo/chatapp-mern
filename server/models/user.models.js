const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    username : {
        type: String,
        required:true
    },
    email : {
        type: String,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Enter a valid email']
    },
    pin: {
        type: String,
        max: [4, '4-digit pin max']
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


module.exports = mongoose.model('UserModel', UserSchema);