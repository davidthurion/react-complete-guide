import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "David",
        age: 34
      },
      {
        name: "Elza",
        age: 30
      }
    ],
    otherState: "yesss"
  };

  switchNameHandler = () => {
    // console.log("click");
    // DON'T DO THIS: this.state.persons[0].name = "Bernard";
    this.setState({
      persons: [
        {
          name: "Maximilian",
          age: 28
        },
        {
          name: "David",
          age: 34
        },
        {
          name: "Elza",
          age: 30
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>This is react!</h1>
        <button onClick={this.switchNameHandler}>Switch names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Climbing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
