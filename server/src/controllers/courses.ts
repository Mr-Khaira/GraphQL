import { Course } from "../models/corseModel.js";

export const getAllCourses = async () => {
  const courses = await Course.find();
  return courses;
};

// This having an argument was alredy declared in the schema, for where
// getCoursesById was used.
export const getCoursesById = async (parent: any, arg: { id: string }) => {
  const courses = await Course.findById(arg.id);
  return courses;
};
