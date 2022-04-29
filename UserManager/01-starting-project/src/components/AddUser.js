import classes from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

import React, { useState } from "react";


function AddUser(props) {

  const [enteredUsername, setEnteredUsername] = useState("Default Username");
  const [enteredAge, setEnteredAge] = useState("18");

  console.log(enteredUsername);

  function buttonClickHandler(e) {
    e.preventDefault();

    if (!enteredUsername) {
      alert("Please fill in a username");
      return;
    }

    if (+enteredAge < 18) {
      alert("Age must be 18 years or older");
      return;
    }
    
    props.onAddUser(enteredUsername,enteredAge);
  }

  function usernameChangeHandler(e) {
    setEnteredUsername(e.target.value);
  }

  function ageChangeHandler(e) {
    setEnteredAge(e.target.value);
  }

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button onClick={buttonClickHandler}>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
