import React, { Component } from 'react';
import './App.css';
import { getRandomIndex, randomProjectApi, audiences } from "../helpers/helpers"
import { Route } from  "react-router-dom";

class App extends Component {
  constructor() {
    super()

    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    console.log(audiences, getRandomIndex(audiences))
    this.getRandomApi();
  }

  getRandomApi() {
    randomProjectApi()
      .then(response => this.setState({project: response.entries[0]}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
