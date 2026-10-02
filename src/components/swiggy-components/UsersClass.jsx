import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

class UsersClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, age } = this.props;
    const { count } = this.state;
    return (
      <Card className="m-4">
        <CardContent>
          <h2>name: {name}</h2>
          <h2>location: {location}</h2>
          <h2>age: {age}</h2>
          <div className="flex items-center gap-2 mt-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => this.setState({ count: count + 1 })}
            >
              +
            </Button>
            <h1>count: {count}</h1>
            <Button
              variant="outline"
              size="icon"
              onClick={() => this.setState({ count: count - 1 })}
              disabled={count === 0}
            >
              -
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}
export default UsersClass;
