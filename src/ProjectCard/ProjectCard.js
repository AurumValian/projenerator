import React from "react";
import "./ProjectCard.css";
import PropTypes from "prop-types";

function ProjectCard(props) {
  return (
    <article className="project-card" id={props.id}>
      API: {props.api} <br/>
      Audience: {props.audience} <br/>
      Link: {props.link} <br/>
      <button className="delete-button" onClick={props.deleteFavorite}>Delete</button>
    </article>
  )
}

ProjectCard.propTypes = {
  api: PropTypes.string,
  audience: PropTypes.string,
  link: PropTypes.string,
  deleteFavorite: PropTypes.func
}

export default ProjectCard;
