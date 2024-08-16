import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js";
import reservationRouter from "./router/reservationRoute.js";

const app= express();
dotenv.config({path:'./config/config.env'}); //path for env file

app.use(cors({                   //for connecting backend with frontend
    origin:[process.env.FRONTEND_URL], //path of frontend
    methods:["POST"],                  //post method for sending data to backend
    credentials: true
}));

app.use(express.json()) //express.json() is used to convert string(in json format) to object
app.use(express.urlencoded({extended:true})) //use to know what type of data
app.use("/api/v1/reservation",reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;