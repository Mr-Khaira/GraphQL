import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }, // Reference to the Course model
});
export const User = mongoose.models?.Users || mongoose.model("Users", userSchema);
