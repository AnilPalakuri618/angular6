// import section
import "./App.css";
import { Raj, Nikitha } from "./components/Raj";
import Nikki from "./components/Nikitha";
import Person from "./components/Person";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import ApiCall from "./components/ApiCall";
import ApiCall2 from "./components/ApiCall2";

// functions or components section

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      number: "AP009999",
      inputVal: "",
      name: "",
      age: "",
      persons: [
        { name: "Anil", age: 25 },
        { name: "Raj", age: 18 },
        { name: "Nikki", age: 35 },
      ],
    };
    this.changeColorToGreen = this.changeColorToGreen.bind(this);
    this.chageCarNumber = this.chageCarNumber.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getApiData() {
    const url = "axios";
  }

  changeColorToGreen() {
    this.setState({ color: "Green" });
  }
  chageCarNumber() {
    this.setState({ number: "TS001234" });
  }
  reset() {
    this.setState({ color: "red", number: "AP009999" });
  }
  handleChange() {
    const person = { name: this.state.name, age: this.state.age };
    const personsUpdated = this.state.persons;
    personsUpdated.push(person);
    this.setState({ persons: personsUpdated, name: "", age: "" });
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/api" exact component={ApiCall} />
            <Route path="/api2" exact component={ApiCall2} />
            {/* <Route path="" exact component={Previous} /> */}
          </Switch>
        </BrowserRouter>
        {/* Name:{" "}
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <br />
        <br />
        Age:{" "}
        <input
          type="text"
          value={this.state.age}
          onChange={(event) => this.setState({ age: event.target.value })}
        />
        <br />
        <br />
        <button onClick={this.handleChange}>Submit</button>
        {this.state.persons.map(function (person) {
          return <Person name={person.name} age={person.age} />;
        })} */}
        {/* <input
          type="text"
          onChange={(event) => this.setState({ inputVal: event.target.value })}
        />
        <button onClick={this.handleChange}>color</button>
        <button
          onClick={() => {
            this.chageCarNumber();
            this.changeColorToGreen();
          }}
        >
          Green
        </button>
        <button onClick={this.reset}>Reset</button>
        <h2 style={{ color: this.state.color }}>
          I am a Car! ,{this.state.color}, car number {this.state.number}
        </h2> */}
      </>
    );
  }
}

// export section
export default App;
