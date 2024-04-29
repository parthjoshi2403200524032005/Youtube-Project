// import express from "express"

// const app = express()
// import dotenv from "dotenv"

// import connectDB from "./db/index.js"

// dotenv.config({ path: "./config.env" })
// connectDB()
//   .then(() => {
//     app.on("error", (err) => {
//       console.log("db connected", err)
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`)
//     })
//   })
//   .catch((err) => {
//     console.log("db not connected", err)
//   })

import express from "express"
import dotenv from "dotenv"

import connectDB from "./db/index.js"
import useregister from "./routes/user.routes.js"
dotenv.config({ path: "./config.env" })

const app = express()

app.use(express.json())

connectDB()
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log("Promise failed", err))

app.use("/api", useregister)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
