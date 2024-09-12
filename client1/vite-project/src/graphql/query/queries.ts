export const users = `#graphql
query Users {
  users {
    name
  }
}
`;

export const addUser = `#graphql
mutation Mutation($name: String!, $age: Int!, $gender: String!) {
  newUser(name: $name, age: $age, gender: $gender)
}
`;
