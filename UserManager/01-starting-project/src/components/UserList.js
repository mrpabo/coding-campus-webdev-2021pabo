import classes from "./UsersList.module.css";
import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

function UsersList(props) {
  console.log(props.users);

  const usersList = props.users.map((user) => {
    return (
      <li key={user.id}>
        {user.username} {user.age} years old
        <Button onClick={() => props.onDeleteUser(user.id)}>Delete</Button>
      </li>
    );
  });

  return (
    <Card className={classes.users}>
      <ul>{usersList}</ul>
    </Card>
  );
}

export default UsersList;
