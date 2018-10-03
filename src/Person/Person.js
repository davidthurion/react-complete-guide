import React from "react";

const person = () => {
  const age = Math.floor(Math.random() * 30);
  return (
    <p>
      I'm a person and I am {age} year
      {age > 1 && "s"} old!
    </p>
  );
};

export default person;
