import Users from "./Users";
import UsersClass from "./UsersClass";

const About = () => {
    return (
        <div>
            <h1 className="text-xl p-2 m-2 font-bold">About</h1>
            <Users name="Geetesh" location="Jhansi" age={27} />
            <UsersClass name="Geetesh" location="Jhansi" age={27} />
        </div>
    );
};

export default About;