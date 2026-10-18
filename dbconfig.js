const mongoose = require("mongoose");
const MONGO_URI = "mongodb+srv://khushboopareek74_db_user:KCcutJY1pFjnsO59@cluster0.ppqzmzc.mongodb.net/wecart";


const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
}


module.exports = dbConnect;

