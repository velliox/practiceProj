import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorPopup.module.css";

const ErrorPopup = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onPopupClose}></div>
      <Card className={classes.popup}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.text}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onPopupClose}>Close popup</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorPopup;
