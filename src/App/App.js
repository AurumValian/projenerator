import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { getRandomIndex, randomProjectApi, audiences } from "../helpers/helpers"
import { Route } from  "react-router-dom";

class App extends Component {
  constructor() {
    super()

    this.state = {
      project: {},
      audience: ""
    }

    this.getRandomApi = this.getRandomApi.bind(this);
    this.getRandomProject = this.getRandomProject.bind(this);
  }

  componentDidMount() {
    console.log(audiences, getRandomIndex(audiences))
  }

  getRandomApi() {
    randomProjectApi()
      .then(response => this.setState({project: response.entries[0]}))
  }

  getRandomProject() {
    this.getRandomApi();
    const audience = audiences[getRandomIndex(audiences)]
    this.setState({audience: audience})
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() =>
          <div>
            <button className="random-project-button" onClick={this.getRandomProject}>Create Random Project!</button>
          </div>
        }
        />
      </div>
    </Router>
    );
  }
}

export default App;
