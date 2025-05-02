import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count = {count}</h1>
      <h2>Name - {name} </h2>
      <h3>Location - Ranchi</h3>
    </div>
  );
};
export default User;
