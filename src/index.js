import express from 'express' ;

const app = express()
import dotenv from "dotenv"
// import app from "./app.js"

import connectDB from "./db/index.js"
dotenv.config({ path: "./env" })
connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("db connected", err)
    })
   app.listen(process.env.PORT || 8000, () => {
       console.log(`server is running on port : ${process.env.PORT}`)
   })
  })
  .catch((err) => {
    console.log("db not connected",err)
  })
