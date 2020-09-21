import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Favorites.css";

class Favorites extends Component {
  componentDidMount() {
    this.props.noLongerHome();
  }

  render() {
    return(
      <section>
        {this.props.favorites.map((favorite, index) =>
          <ProjectCard api={favorite.api.API} link={favorite.api.Link} audience={favorite.audience} key={index} id={index} deleteFavorite={this.props.deleteFavorite}/>
        )}
      </section>
    )
  }
}

export default Favorites;
