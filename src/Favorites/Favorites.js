import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Favorites.css";
import PropTypes from "prop-types";

class Favorites extends Component {
  componentDidMount() {
    this.props.noLongerHome();
  }

  render() {
    return(
      <section className="card-section">
        {this.props.favorites.map((favorite, index) =>
          <ProjectCard
            subject={favorite.subject}
            api={favorite.api.API}
            link={favorite.api.Link}
            audience={favorite.audience}
            topic={favorite.persuasiveTopic.topic}
            stance={favorite.persuasiveTopic.stance}
            key={index}
            id={index}
            deleteFavorite={this.props.deleteFavorite}
          />
        )}
      </section>
    )
  }
}

Favorites.propTypes = {
  noLongerHome: PropTypes.func,
  favorites: PropTypes.array,
  deleteFavorite: PropTypes.func
}

export default Favorites;
