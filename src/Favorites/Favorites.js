import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Favorites.css";

class Favorites extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.noLongerHome();
  }

  render() {
    return(
      <section>
        {this.props.favorites.map((favorite, index) =>
          <ProjectCard api={favorite.api.API} link={favorite.api.Link} audience={favorite.audience} key={index} id={index}/>
        )}
      </section>
    )
  }
}

export default Favorites;
