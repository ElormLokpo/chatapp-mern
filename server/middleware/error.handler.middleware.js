exports.errorHandler = (err, req,res, next)=>{
    res.status(400).json({msg:err.errMessage, rm: err.stack});
    next();
}


