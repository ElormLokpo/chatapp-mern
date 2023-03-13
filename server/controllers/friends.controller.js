const FriendModel = require('../models/friends.model');
const ErrHandler = require('../utils/errHandler');

exports.addFriendsController = async (req, res, next)=>{
    const {userid, friendid} = req.body;

    if(!userid || !friendid){
        next(new ErrHandler('UserID or FriendID required'));
    }

    const friendData = await FriendModel.findOne({user: userid});

    if(!friendData){
        next( new ErrHandler('No friends'));
    }

    const currentFriends = [...friendData.friends];
    currentFriends.push(friendid);

    const finalFriendData = await FriendModel.findByIdAndUpdate(friendData._id, {friends: currentFriends}, {new:true});
   
    console.log(currentFriends);
    res.status(200).json({success:true, finalFriendData});
    next();
}


exports.getFriendsController = async (req, res, next) =>{
    const userid = req.params.id;
    console.log(userid);
    const data = await FriendModel.find({user: userid}).select('friends');
    res.status(200).json({success:true, data});
    next();
}