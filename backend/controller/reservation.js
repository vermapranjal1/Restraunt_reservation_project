import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";
  
 export const sendReservation = async (req,res,next)=>{
   const{firstName,lastName,phone,email,time,date}= req.body; //these terms required from frontend
   if(!firstName||!lastName||!phone||!email||!time||!date){
    return next(new ErrorHandler("Please fill full reservation form!",400));
   }
   try {
    await Reservation.create({firstName,lastName,phone,email,time,date});
    res.status(200).json({
        success:true,
        message:"Reservation Sent Successfully"
    });
   } catch (error) {
    if(error.name==='ValidationError'){
        const validationErrors=Object.values(error.errors).map(  //error.errors: This property is an object containing details about each field that failed validation. Each key corresponds to a field name, and the value is an object that provides details about the validation failure for that field.
            (err)=>err.message                                   //Object.values(error.errors): This retrieves an array of the error objects associated with each field.
        );                                                       //.map((err) => err.message): This maps over the array of error objects and extracts the message
        return next(new ErrorHandler(validationErrors.join(" , "),400));   //The validationErrors array contains all the error messages for the fields that failed validation. The join(", ") method combines these messages into a single string, separated by commas
    }
    return next(error);
   }
};
