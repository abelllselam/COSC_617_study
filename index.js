// import dns from "dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import dotenv from "dotenv"; //this brings in the dotenv library into your code.
import dotenv from "dotenv";
dotenv.config(); // what this does is read the .env file and loads its values into process.env so that anywhere in the code we can access the environment (variable) like (process.env.MONGODB_URI) without hard-coding them.
// const myDB = process.env.MONGO_URI; // this is assigning the mongoDB URI environment variables that were configured to a constant.
// console.log("Connecting with URI:--->", process.env.MONGODB_URI);
const uri = process.env.MONGODB_URI;

// console.log("Mongodb_URI: ", process.env.MONGODB_URI);

import mongoose from "mongoose"; //mongoose is an object data modeling (ODM) library for MongoDB in Node.js. Which lets you define structures, types and validation. Creates models based on those schemas to query and manipulate documents. It is also a way to write more JavaScript friendly API instead of writing raw MongoDB queries. In simple terms it is simply working with MongoDB in your Node apps to avoid all the hassle.

async function connectTOMOngo() {
  // this is a function that is declared and marked async so that we can use the await keyword inside to "pause" untila primise resolves (In this case the promise is returned by mongoose.connect).

  try {
    //we are wrapping it up in try catch if there is any problem it will send it to the catch.

    await mongoose.connect(uri);
    //This are optional now because it is done automatically but it is critical to use them for legacy purposes. So that we dont get an error on legacy systems.
    //useNewUrlParser: true, // opt into the new, more reliable URI parser
    //useUnifiedTopology: true, // opt into the new, unified server-monitoring engine
    // myDB -“Where” to connect (your Atlas URI),) //mongoose is that is being imported and one of the methods in that module is connect() This will help us connect to the DB.
    console.log(
      "Connected to MongoDB Atlas!-----------------------------------"
    );
  } catch (error) {
    console.error(
      "MongoDB connection error: ------------------------------------------------------------------------------",
      error
    );
  }
}

connectTOMOngo();
