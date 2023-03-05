const UserModel = require('../models/user.models');
const ErrHandler = require('../utils/errHandler');


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
    
        res.status(200).json({success:true, data});
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

        res.status(200).json({success:true, msg:'Login successful', token});
        next();

    } catch(err){
        next(new ErrHandler('Something went wrong'))
    }
   
}