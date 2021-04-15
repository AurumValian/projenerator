import React from "react";
import "./ProjectCard.css";
import PropTypes from "prop-types";

function ProjectCard(props) {
  return (
    <article className={"project-card " + props.subject} id={props.id}>
      {props.subject === "programming" && (
        <p className="card-info">
          <b>Programming</b> <br/>
          API: {props.api} <br/>
          Audience: {props.audience} <br/>
          Link: {props.link} <br/>
        </p>
      )}
      {props.subject === "persuasiveTopics" &&
        <p className="card-info">
          <b>Persuasive Essay</b> <br/>
          Topic: {props.topic} <br/>
          Stance: {props.stance} <br/>
        </p>
      }
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
