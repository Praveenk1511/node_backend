// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js';

dotenv.config({path : './env'});


connectDB()
.then(() => {
   app.listen(process.env.PORT,() => {
    console.log(`App listening on ${process.env.PORT || 8000}`);
   });
})
.catch(err => {
    console.log(`MongoDB connection failed : ${err}`);
});

/* import express from "express";
const app = express();
( async() => {
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on('error', (err) => {
        console.log(err);
        throw err;
    });

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    });

   } catch (error) {
    console.log("error: " + error);
    throw error;
   }
})() */