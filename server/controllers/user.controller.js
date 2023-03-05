const UserModel = require('../models/user.models');
const ErrHandler = require('../utils/errHandler');


exports.registerUserController = async (req,res,next)=>{
    try{
        const {email, pin} = req.body;

        if(!email || !pin){
            next(ErrHandler('Email or Pin required'));
        }
        const userEmail = await UserModel.findOne({email});
    
        if(userEmail){
            next(ErrHandler('Email already exists'));
        }
    
        const data = await UserModel.create({email, pin});
    
        res.status(200).json({success:true, data});
        next();
    } catch(err){
        next(ErrHandler('Something went wrong')); 
    }
   

}

exports.loginUserController = async (req,res,next)=>{
    try{
        const {email, pin} = req.body;
    
        if(!email || !pin){
            next(ErrHandler('Email or Pin required'));
        }
    
       
        const userEmail = await UserModel.findOne({email});
        if(!userEmail){
            next(ErrHandler('Email does not exist'));
        }
    
        const is_valid = userEmail.comparePin(pin);
    
        if (!is_valid){
            next('Incorrect login credentials');
        }
    
        res.status(200).json({success:true, data, msg:'Login successful'});
        next();
    } catch(err){
        next(ErrHandler('Something went wrong'))
    }
   
}