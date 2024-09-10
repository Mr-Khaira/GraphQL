import { User } from "../models/userModel.js";
export const getAllUsers = async () => {
    const users = await User.find().populate("course");
    // This populate will populate the pain object id, and we will be able to
    // ditectly access the date associated with that object id.
    console.log(users);
    return users;
};
