import mongoose from "mongoose";

export const dbConnection=()=>{   
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"restraunt"
    }).then(()=>{
        console.log("Conencted to database successfully!");
    }).catch((err)=>{
        console.log(`Some error occured while connecting to database! ${err}`);
});
}