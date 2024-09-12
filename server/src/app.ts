// import express from "express";
// import cors from "cors";
// import { errorMiddleware } from "./middlewares/error.js";
// import morgan from "morgan";
import dotenv from "dotenv";

import { connectDB } from "./database/database.js";
//import { User } from "./models/userModel.js";
//import { Course } from "./models/corseModel.js";

import { graphQL } from "./graphQL/graphql.js";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;

connectDB(process.env.MONGO_URI!);

// async function creatingRecord() {
//   const course = await Course.create({
//     name: "React JS",
//   });

//   const instructor = await User.create({
//     name: "Gaara",
//     email: "gaaraKasekegi@mail.com",
//     password: "vgdkbnbgnbgdbn",
//     course: course._id,
//   });

//   course.instructor = instructor._id;
//   await course.save();
// }
// creatingRecord();

graphQL(port);

//   const app = express();

//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev'))

//   app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });

//   // your routes here

//   app.get("*", (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Page not found'
//     });
//   });

//   app.use(errorMiddleware);

//   app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));
