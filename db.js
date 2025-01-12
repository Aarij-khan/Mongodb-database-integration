import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    const MY_SECRET_KEY = process.env.MY_SECRET_KEY;
    console.log("🚀 ~ MY_SECRET_KEY :", MY_SECRET_KEY )
  try {
    await mongoose.connect(MY_SECRET_KEY);
    

    console.log(`\n🌿 MongoDB connected ! 🍃\n`);

    mongoose.connection.on(
      "error",
      console.error.bind(console, "Connection error:")
    );

    process.on("SIGINT", () => {
      // Cleanup code
      mongoose.connection.close();

      console.log("Mongoose connection closed due to application termination");
      process.exit(0);
    });
  } catch (error) {
    console.error("MONGODB connection FAILED ", error);
    process.exit(1); // Exited with error
  }

};

try {
  await connectDB();
} catch (err) {
  console.log(err);
}