import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import { expressMiddleware } from "@apollo/server/express4";
import { connectDB } from "./database/database.js";
//import { User } from "./models/userModel.js";
//import { Course } from "./models/corseModel.js";
import { graphQL } from "./graphQL/graphql.js";
dotenv.config({ path: "./.env" });
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
connectDB(process.env.MONGO_URI);
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
const server = graphQL(); // This is for running the server with the AppoloServer.
await server.start(); // After es 2022, we can await in global.
const app = express();
app.use(express.json()); // req for working with json, bec. clinet sends req in JSON and
// hence crucial because GraphQL queries are sent in JSON format.
// app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev")); // is used to log details about incoming requests to the server
// like how much time it took to complete the req.
const isAdmin = (req, res, next) => {
    const user = { role: "admin" };
    if (user.role === "admin") {
        next();
    }
    else {
        res.status(403).send("Only Admin access");
    }
};
// The the complete site can be kept on rest while the Admin dasbord can be kept on
// GQL, so we verify via the middleware and then grant the access.
app.use("/graphql", isAdmin, expressMiddleware(server)); // expressMiddleware -
// expressMiddleware function enables us to attach Apollo Server to an Express server.
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
// your routes heree
app.get("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Page not found",
    });
});
app.use(errorMiddleware);
app.listen(port, () => console.log("Server is working on Port:" + port + " in " + envMode + " Mode."));
