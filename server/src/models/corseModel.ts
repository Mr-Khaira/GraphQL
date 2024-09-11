import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Export the Course model
export const Course =
  mongoose.models?.Course || mongoose.model("Course", courseSchema);
