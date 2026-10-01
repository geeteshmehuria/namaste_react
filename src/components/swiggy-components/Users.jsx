import { useState } from "react";
const Users = ({ name, location, age }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="border p-4 m-4 rounded-lg">
      <h2>name: {name}</h2>
      <h2>location: {location}</h2>
      <h2>age: {age}</h2>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCount(count + 1)}
            className=" border-solid border-gray-500 text-2xl border-1 w-10 h-10 text-center"
            >
          +
        </button>
        <h1>count: {count}</h1>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className="border-solid border-gray-500 text-2xl border-1 w-10 h-10 text-center"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Users;
