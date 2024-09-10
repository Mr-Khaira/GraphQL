import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/schema/schema.js";
import { connectDB } from "./database/database.js";
import { getAllUsers } from "./controllers/users.js";
import { getAllCourses, getCoursesById } from "./controllers/courses.js";
dotenv.config({ path: "./.env" });
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
connectDB(process.env.MONGO_URI);
// 'ApolloServer' a class, the below is an instance of it.
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            hello: () => "Hello World",
            users: getAllUsers,
            courses: getAllCourses,
            course: getCoursesById,
        },
    },
}); // passed typeDefs and Resolvers these are both objects.
/* typedef is basically like a calss(c++) that defines the "shape"
of queries that are executed against our data. */
startStandaloneServer(server, {
    listen: { port },
})
    .then(() => {
    console.log("server started at ", port);
})
    .catch((error) => {
    console.log("Error at standALoneServer ", error);
});
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
