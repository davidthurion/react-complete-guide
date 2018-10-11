import React from "react";

import styles from "./Person.module.scss";

const person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} year
        {props.age > 1 && "s"} old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
