import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { formatUserName } from "./utils";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;

    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (mounted) {
        setUsers(response.data);
        console.log(response.data);
      }
    };

    getUsers();

    return () => (mounted = false);
  }, []);
  return (
    <div>
      <h2>USERS:</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({formatUserName(user.username)})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
