import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  console.log("mongoose.connection.readyState", mongoose.connection.readyState);
  try {
    if (mongoose.connection.readyState === 2) {
      return;
    }
    await mongoose.connect(uri, { dbName: "Learning_GraphQL" });
    console.log("Connected to DB successfully.");
  } catch (error) {
    console.log("Error connecting to DB, file database.ts", error);
  }
};
