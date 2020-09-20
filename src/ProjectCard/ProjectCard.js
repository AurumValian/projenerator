import React from "react";
import "./ProjectCard.css";

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

export default ProjectCard;
