const mongoose = require('mongoose');

const connectDb = async ()=>{
    try {
    const MONGO_URL = process.env.MONGO_URL;

    await mongoose.connect(MONGO_URL, {
      serverSelectionTimeoutMS: 10000
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error ❌", error);
    process.exit(1); // stop server if DB fails
  }
}

module.exports = connectDb;