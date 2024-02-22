import express from 'express' ;

const app = express()
import dotenv from "dotenv"
// import app from "./app.js"

import connectDB from "./db/index.js"
dotenv.config({ path: "./env" })
connectDB()
  .then(() => {
    app.on('error', (err) => {
      console.log("db connected",err)
    })
    const port = 8001; // Change the port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  })
  .catch((err) => {
    console.log("db not connected",err)
  })
