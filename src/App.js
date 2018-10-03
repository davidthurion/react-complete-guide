import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is react!</h1>
        <Person name="Max" age="28" />
        <Person name="David" age="34">
          My hobbies: Climbing
        </Person>
        <Person name="Elza" age="30" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "This is react!!")
    // );
  }
}

export default App;
