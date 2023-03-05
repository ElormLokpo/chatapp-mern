class ErrHandler extends Error{
    constructor(errMessage){
        super();
        this.errMessage = errMessage;
    }
}

module.exports = ErrHandler;