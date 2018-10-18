import React from "react";

import styles from "./Cockpit.module.scss";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push("red");
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold");
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>And it works !</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
