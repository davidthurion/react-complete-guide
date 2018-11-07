import React, { PureComponent } from "react";
import styles from "./App.module.scss";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props);
    this.state = {
      persons: [
        {
          id: "kmlk",
          name: "Max",
          age: 28
        },
        {
          id: "SSsf",
          name: "David",
          age: 34
        },
        {
          id: "qska",
          name: "Elza",
          age: 30
        }
      ],
      otherState: "yesss",
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componenetWillUpdate",
      nextProps,
      nextState
    );
  }
  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componenetDidlUpdate");
  }
  // state = {
  //   persons: [
  //     {
  //       id: "kmlk",
  //       name: "Max",
  //       age: 28
  //     },
  //     {
  //       id: "SSsf",
  //       name: "David",
  //       age: 34
  //     },
  //     {
  //       id: "qska",
  //       name: "Elza",
  //       age: 30
  //     }
  //   ],
  //   otherState: "yesss",
  //   showPersons: false
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // Copie le tableau
    const persons = [...this.state.persons];
    // Modifie l'élement voulu
    persons[personIndex] = person;

    // Update le tableau avec l'élément voulu modifié
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] Inside render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
