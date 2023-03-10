const FriendModel = require('../models/friends.model');

exports.addFriendsController = async (req, res, next)=>{
    const {userid, friendid} = req.body;
    const friendData = await FriendModel.findOne({user: userid});

    const currentFriends = [...friendData.friends];
    currentFriends.push(friendid);

    const finalFriendData = await FriendModel.findByIdAndUpdate(friendData._id, {friends: currentFriends}, {new:true});
   
    console.log(currentFriends);
    res.status(200).json({success:true, finalFriendData});
}


exports.getFriendsController = async (req, res, next) =>{
    const userid = req.params.id;
    const data = await FriendModel.find({user: userid});
    res.status(200).json({success:true, data});
}