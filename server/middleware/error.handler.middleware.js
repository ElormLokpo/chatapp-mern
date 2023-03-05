const errorHandler = (err, req,res, next)=>{
    res.status(400).json({msg:err.errMessage});
    next();
}


module.exports = errorHandler;