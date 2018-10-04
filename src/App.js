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
    otherState: "yesss",
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log("click");
    // DON'T DO THIS: this.state.persons[0].name = "Bernard";
    this.setState({
      persons: [
        {
          name: newName,
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

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 28
        },
        {
          name: event.target.value,
          age: 34
        },
        {
          name: "Elza",
          age: 30
        }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>This is react!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "André")}
              changed={this.nameChangedHandler}
            >
              My hobbies: Climbing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
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
