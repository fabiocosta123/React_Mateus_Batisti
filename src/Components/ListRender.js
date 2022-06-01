import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    "Fábio",
    "Juliana",
    "Gabriel",
    "Lucas",
    "Ana Julia",
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Fábio", age: 38 },
    { id: 2, name: "Juliana", age: 36 },
    { id: 3, name: "Gabriel", age: 13 },
    { id: 4, name: "Lucas", age: 7 },
    { id: 5, name: "Ana Julia", age: 1 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 6);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete</button>
    </div>
  );
};

export default ListRender;
