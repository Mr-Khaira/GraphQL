import { User } from "../models/userModel.js";
export const getAllUsers = async () => {
  const users = await User.find(); //.populate("course");
  // This populate will populate the pain object id, and we will be able to
  // ditectly access the date associated with that object id.
  //  automatically replace the specified field(s) in a document with documents from a related collection
  //console.log(users);
  return users;
};

export const getUserById = async (id: string) => {
  const instructor = await User.findById(id);
  return instructor;
};
