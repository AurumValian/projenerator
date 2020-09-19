import React, { Component } from "react";
import Header from "../Header/Header";
import Project from "../Project/Project";
import Favorites from "../Favorites/Favorites";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { getRandomIndex, randomProjectApi, audiences } from "../helpers/helpers"
import { Route } from  "react-router-dom";

class App extends Component {
  constructor() {
    super()

    this.state = {
      api: {},
      audience: "",
      isHome: true,
      favorites: []
    }

    this.getRandomApi = this.getRandomApi.bind(this);
    this.getRandomProject = this.getRandomProject.bind(this);
    this.saveProject = this.saveProject.bind(this);
  }

  componentDidMount() {
    console.log(audiences, getRandomIndex(audiences))
  }

  getRandomApi() {
    randomProjectApi()
      .then(response => this.setState({api: response.entries[0]}))
  }

  getRandomProject() {
    this.getRandomApi();
    const audience = audiences[getRandomIndex(audiences)]
    this.setState({audience: audience})
  }

  saveProject() {
    const favorites = this.state.favorites.slice();
    favorites.push({api: this.state.api, audience: this.state.audience});
    this.setState({favorites: favorites})
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Header isHome={this.state.isHome} favorites={this.state.favorites}/>
        <Route exact path="/" render={() =>
          <div>
            <button className="random-project-button" onClick={this.getRandomProject}>
              Create Random Project!
            </button>
            {this.state.api.API && (
              <Project api={this.state.api.API} description={this.state.api.description} audience={this.state.audience} saveProject={this.saveProject}/>
            )}
          </div>
        }
        />
        <Route exact path="/favorites" render={() =>
          <Favorites />
        }
        />
      </div>
    </Router>
    );
  }
}

export default App;
