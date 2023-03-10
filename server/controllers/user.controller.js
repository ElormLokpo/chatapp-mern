const UserModel = require('../models/user.models');
const ErrHandler = require('../utils/errHandler');
const FriendModel = require('../models/friends.model');


exports.registerUserController = async (req,res,next)=>{
    try{
        const {username,email, pin} = req.body;
       
        if(!email || !pin){
            next(new ErrHandler('Email or Pin required'));
        }
        const userEmail = await UserModel.findOne({email});
    
        if(userEmail){
            next(new ErrHandler('Email already exists'));
        }
    
        
        const data = await UserModel.create({username, email, pin});
    
        let token = null;
        if(data){
            token = await data.createToken();
        }
        const friends = await FriendModel.create({user: data._id, friends:[]});
        res.status(200).json({success:true, usrdata: {email: data.email, username: data.username, id: data._id, created: data.createdAt } , token});
        next();
    } catch(err){
        next(new ErrHandler('Something went wrong')); 
    }
   

}

exports.loginUserController = async (req,res,next)=>{
    try{
        const {email, pin} = req.body;
       
        if (!email || !pin){
            next(new ErrHandler('Email or Pin required'));
        }
    
       
        const userEmail = await UserModel.findOne({email});
       
        if(!userEmail){
            next(new ErrHandler('Username or Email does not exist'));
        }
    
        const is_valid = await userEmail.comparePin(pin);
       
        if (!is_valid){
            next(new ErrHandler('Incorrect login credentials'));
        }
    
        let token = null;

        if(is_valid){
            token = await userEmail.createToken();
           
        }

        res.status(200).json({success:true,usrdata: {email: userEmail.email, username: userEmail.username, id: userEmail._id, created: userEmail.createdAt }, msg:'Login successful', token});
        next();

    } catch(err){
        next(new ErrHandler('Something went wrong'))
    }
   
}