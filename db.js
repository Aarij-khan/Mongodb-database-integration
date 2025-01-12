import mongoose from "mongoose";

// efnyYI5pDubxLOQD
// dbUri = mongodb+srv://Aarij-admin:<db_password>@cluster0.rec3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const mongoDbUri =
  "mongodb+srv://Aarij-admin:efnyYI5pDubxLOQD@cluster0.rec3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDbUri);

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