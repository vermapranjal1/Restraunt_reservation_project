class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);     //message exists in Error(super class)
        this.statusCode=statusCode;
    }
}

export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "Internal Server Error!";
    err.statusCode=err.statusCode || 500; //500 for internal server error
   
    return res.status(err.statusCode).json({
       success:false,
       message:err.message
    });
};

export default ErrorHandler;