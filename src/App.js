import React, {useState} from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

const App = () => {
  const [usersList , setUsersList ] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={[]}/>
    </div>
  );
};

export default App;
