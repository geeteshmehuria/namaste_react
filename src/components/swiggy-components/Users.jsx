import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Users = ({ name, location, age }) => {
  const [count, setCount] = useState(0);
  return (
    <Card className="m-4">
      <CardContent>
        <h2>name: {name}</h2>
        <h2>location: {location}</h2>
        <h2>age: {age}</h2>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="outline" size="icon" onClick={() => setCount(count + 1)}>
            +
          </Button>
          <h1>count: {count}</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Users;
