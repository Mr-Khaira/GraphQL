import { getAllCourses, getCoursesById } from "../../controllers/courses.js";
import { getAllUsers, getUserById } from "../../controllers/users.js";
let tempUser = [];
export const graphQLResolvers = {
    Mutation: {
        newUser: async (_, { name, age, gender }) => {
            tempUser.push({ name, age, gender });
            console.log("VNFSKVSFN ", tempUser);
            return "User added successgully";
        },
    },
    Query: {
        hello: () => "Hello World",
        users: getAllUsers,
        courses: getAllCourses,
        course: getCoursesById,
        sampleUsers: () => tempUser,
    },
    Course: {
        instructor: async (course) => {
            // `course` is the parent here, representing the Course object
            //console.log("course ", course);
            // console.log("course.instructor ", course.instructor); // This should be the ObjectId
            return await getUserById(course.instructor);
        },
        // Lecture: {
        //   videoUrl: (lec: any) => ({
        //     _480p: lec.videoUrl["480p"],
        //     _720p: lec.videoUrl["720p"],
        //     _1080p: lec.videoUrl["1080p"],
        //   }),
        // },
    },
};
