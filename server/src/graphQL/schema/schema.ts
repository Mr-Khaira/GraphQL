export const graphQLSchema = `#graphql

# custom schemas are also possible, but 'Query' and 'Mutation' are reserved.

type Users {
    _id:ID!,
    name:String!,
    email:String!,
    password:String,
    course:Course!, # Course or String.
}

type Course{
    name:String!,
    instructor: Users!,
}

type SampleUser{
    name: String!,
    age: Int!,
    gender: String!,
}

type Query {
hello: String,
users: [Users],
courses: [Course],
course(id:ID!): Course,
sampleUsers: [SampleUser],
}
# This one course(id:ID!): Course, requires id argument for us to pass the 
# appropriate id to get the respective course, and for such rotues,
# parameters are defiend this way.

type Mutation {
    newUser(name:String!, age:Int!, gender:String!):String 
}

`;
