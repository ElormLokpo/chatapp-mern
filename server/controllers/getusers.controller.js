const UserModel = require('../models/user.models');

exports.getUsersController = async (req,res,next)=>{
    const users = await UserModel.find().select(['_id', 'username', 'email',]);

    res.status(200).json({success:true, users});
}