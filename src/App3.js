import { useEffect, useState } from "react"

function App() {

  const[users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
      console.log("fetched users", data)
    }

    fetchUsers(); //calling the function

  }, [])
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>

    </div>
  )

}
export default App