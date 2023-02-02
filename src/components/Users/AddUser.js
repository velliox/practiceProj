import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorPopup from "../UI/ErrorPopup";
//import "./AddUser.css";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorInfo, setErrorInfo] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorInfo({
        title: "Invalid input",
        text: "Name and age are not valid",
      });
      return;
    }
    if (+enteredAge < 1) {
      setErrorInfo({
        title: "Invalid age",
        text: "Age must be a number bigger than 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorInfoHandler = () => {
    setErrorInfo(null);
  };

  return (
    <div>
      {errorInfo && (
        <ErrorPopup
          title={errorInfo.title}
          text={errorInfo.text}
          onPopupClose={errorInfoHandler}
        ></ErrorPopup>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age in years</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
