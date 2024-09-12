import { useLazyQuery, useMutation, gql } from "@apollo/client";
import { addUser, users } from "./graphql/query/queries";
import { FormEvent, useState } from "react";

const App = () => {
  // useLazyQuery directly returns an array.
  const [getUsers, { loading, data, error }] = useLazyQuery(gql(users));
  // On clicking view courses, fetching would be done.

  // This one fetches immegiately
  //const { loading, data, error } = useQuery(gql(users));
  console.log(data);

  const [addNewUser, { data: addUserResponse }] = useMutation<
    {
      newUser: string;
    },
    { name: string; age: number; gender: string }
  >(gql(addUser));
  console.log(addUserResponse);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  if (error) {
    console.log(error);
    return <h1>Some Error!</h1>;
  }

  const submitHnadler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewUser({
      variables: {
        name,
        age: parseInt(age), // Ensure age is an integer, othwewise it wont work.
        gender,
      },
    });
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h2>User name: {data?.users[0]?.name}</h2>
      <button onClick={() => getUsers()}>view Users</button>
      <form onSubmit={submitHnadler}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="nember"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <button type="submit">view Users</button>
      </form>
    </div>
  );
};

export default App;
