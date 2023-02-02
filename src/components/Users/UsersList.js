import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.length ? (
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} y.o)
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>The list of users is empty</li>
        </ul>
      )}
    </Card>
  );
};

export default UsersList;
