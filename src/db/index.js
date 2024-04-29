import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(
      `mongodb+srv://Parthyoutube:Parth24032005@cluster0.egs5a3t.mongodb.net/${DB_NAME}`
    )
    console.log(`MongoDB Connected: ${connectioninstance.connection.host}`)
  } catch (error) {
    console.log("MONGOOSE ERROR IN CONNECTION")
    process.exit(1)
  }
}

export default connectDB

// mongodb+srv://Parthyoutube:<password>@cluster0.egs5a3t.mongodb.net/
// Parth24032005