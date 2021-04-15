import React, { Component } from "react";
import Header from "../Header/Header";
import Project from "../Project/Project";
import Favorites from "../Favorites/Favorites";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { getRandomIndex, randomProjectApi, persuasiveTopics, audiences } from "../helpers/helpers"
import { Route } from  "react-router-dom";

class App extends Component {
  constructor() {
    super()

    this.state = {
      api: {},
      audience: "",
      isHome: true,
      subject: "programming",
      subjectName: "Programming",
      persuasiveTopic: {},
      favorites: []
    }

    this.retrieveFavorites = this.retrieveFavorites.bind(this);
    this.changeSubject = this.changeSubject.bind(this);
    this.removeSubjectClasses = this.removeSubjectClasses.bind(this);
    this.addSubjectClass = this.addSubjectClass.bind(this);
    this.getRandomApi = this.getRandomApi.bind(this);
    this.getRandomProject = this.getRandomProject.bind(this);
    this.saveProject = this.saveProject.bind(this);
    this.noLongerHome = this.noLongerHome.bind(this);
    this.backHome = this.backHome.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.resetFavoritesState = this.resetFavoritesState.bind(this);
  }

  componentDidMount() {
    this.retrieveFavorites();
  }

  changeSubject(e) {
    e.preventDefault();
    const newSubject = document.querySelector("select").value
    const subjectName = newSubject === "programming" ?
      "Programming" : newSubject === "persuasiveTopics" ?
      "Persuasive Essays" : "";
      this.removeSubjectClasses();
      this.addSubjectClass(newSubject);
    this.setState({api: {}, audience: "", subject: newSubject, subjectName: subjectName, persuasiveTopic: {}})
  }

  removeSubjectClasses() {
    !!document.querySelector(".project-area") && document.querySelector(".project-area").classList.remove("persuasiveTopics", "programming")
    document.querySelector(".random-project-button").classList.remove("persuasiveTopics", "programming")
  }

  addSubjectClass(subject) {
    !!document.querySelector(".project-area") && document.querySelector(".project-area").classList.add(subject)
    document.querySelector(".random-project-button").classList.add(subject)
  }

  retrieveFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) {
      this.setState({ favorites: [] })
    } else {
      this.setState({ favorites: favorites })
    }
  }

  getRandomApi() {
    randomProjectApi()
      .then(response => this.setState({api: response.entries[0]}))
  }

  getRandomProject() {
    if (this.state.subject === "programming") {
      this.getRandomApi();
      const audience = audiences[getRandomIndex(audiences)]
      this.setState({audience: audience})
    } else if (this.state.subject === "persuasiveTopics") {
      const topic = persuasiveTopics[getRandomIndex(persuasiveTopics)]
      this.setState({persuasiveTopic: {topic: topic.topic, stance: topic.stances[getRandomIndex(topic.stances)]}})
    }
  }

  async saveProject() {
    const favorites = this.state.favorites.slice();
    const newProject = {subject: this.state.subject, api: this.state.api, audience: this.state.audience, persuasiveTopic: this.state.persuasiveTopic}
    const isRepeat = favorites.find(favorite => {
      return (favorite.persuasiveTopic === newProject.persuasiveTopic) || (favorite.api === newProject.api && favorite.audience === newProject.audience)
    })
    if (!isRepeat) {
      favorites.push(newProject);
    await this.resetFavoritesState(favorites);
    localStorage.setItem(`favorites`, JSON.stringify(this.state.favorites))
    }
  }

  resetFavoritesState(favorites) {
    this.setState({favorites: favorites})
  }

  noLongerHome() {
    this.setState({isHome: false});
  }

  backHome() {
    this.setState({isHome: true});
  }

  async deleteFavorite(event) {
    const badFavorite = event.target.closest(".project-card");
    const newFavorites = this.state.favorites.filter((favorite, index) => {
      return Number(badFavorite.id) !== index
    })
    await this.resetFavoritesState(newFavorites)
    localStorage.setItem(`favorites`, JSON.stringify(this.state.favorites))
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Header isHome={this.state.isHome} favorites={this.state.favorites} backHome={this.backHome}/>
        <Route exact path="/" render={() =>
          <div>
            <form>
              <label>Your current subject is {this.state.subjectName}</label> <br/>
              <select id="subjects" name="subjects">
                <option value="programming">Programming</option>
                <option value="persuasiveTopics">Persuasive Essays</option>
              </select> <br/>
              <button className="change-subject-button" onClick={this.changeSubject}>Change the Subject!</button>
            </form>
            {this.state.subject === "programming" && this.state.api.API && (
              <Project subject="programming" api={this.state.api.API} description={this.state.api.Description} link={this.state.api.Link} audience={this.state.audience} saveProject={this.saveProject}/>
            )}
            {this.state.subject === "persuasiveTopics" && this.state.persuasiveTopic.topic && (
              <Project subject="persuasiveTopics" topic={this.state.persuasiveTopic.topic} stance={this.state.persuasiveTopic.stance} saveProject={this.saveProject}/>
            )}
            <button className="random-project-button" onClick={this.getRandomProject}>
              Create Random Project!
            </button>
            {!this.state.api.API && !this.state.persuasiveTopic.topic && (
              <section className="page-description">
                Projenerator is where to turn when you can't come up with an idea for a project. Hit that button and find your next project!
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
