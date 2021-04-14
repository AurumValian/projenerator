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
    this.noLongerHome = this.noLongerHome.bind(this);
    this.backHome = this.backHome.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
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
    const newProject = {api: this.state.api, audience: this.state.audience}
    const isRepeat = favorites.find(favorite => {
      return favorite.api === newProject.api && favorite.audience === newProject.audience
    })
    if (!isRepeat) {
      favorites.push(newProject);
      this.setState({favorites: favorites})
    }
  }

  noLongerHome() {
    this.setState({isHome: false});
  }

  backHome() {
    this.setState({isHome: true});
  }

  deleteFavorite(event) {
    const badFavorite = event.target.closest(".project-card");
    const newFavorites = this.state.favorites.filter((favorite, index) => {
      return Number(badFavorite.id) !== index
    })
    this.setState({favorites: newFavorites})
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Header isHome={this.state.isHome} favorites={this.state.favorites} backHome={this.backHome}/>
        <Route exact path="/" render={() =>
          <div>
            {this.state.api.API && (
              <Project api={this.state.api.API} description={this.state.api.Description} link={this.state.api.Link} audience={this.state.audience} saveProject={this.saveProject}/>
            )}
            <button className="random-project-button" onClick={this.getRandomProject}>
              Create Random Project!
            </button>
            {!this.state.api.API && (
              <section className="page-description">
                This website is where to turn when you can't come up with an idea for a project. Hit that button and find your next project!
              </section>
            )}
          </div>
        }
        />
        <Route exact path="/favorites" render={() =>
          <Favorites favorites={this.state.favorites} noLongerHome={this.noLongerHome} deleteFavorite={this.deleteFavorite}/>
        }
        />
      </div>
    </Router>
    );
  }
}

export default App;
