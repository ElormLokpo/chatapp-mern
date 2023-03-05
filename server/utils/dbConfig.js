const mongoose = require('mongoose');

const connectDB = async ()=>{
    const db = await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
    console.log("Connected to Database");
}


module.exports = connectDB;