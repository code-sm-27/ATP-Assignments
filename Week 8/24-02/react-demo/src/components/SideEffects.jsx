import { useEffect, useState } from "react";

function SideEffects() {
  let [users, setUsers] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  console.log("side effect component rendered");

  useEffect(() => {
    //side effect

    async function getData() {
      setLoading(true);

      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.status !== 200) {
          throw new Error("Failed to fetch");
        }
        let usersData = await res.json();
        setUsers(usersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading === true) {
    return <p className="text-red-500 text-4xl">loading...</p>;
  }
  if (error !== null) {
    return <p className="text-red-500 text-4xl">{error}</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.name}</td>
              <td>{userObj.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SideEffects;