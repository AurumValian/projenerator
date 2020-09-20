import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <article className="project-card">
      API: {props.api} <br/>
      Audience: {props.audience} <br/>
      Link: {props.link} <br/>
      <button className="delete-button">Delete</button>
    </article>
  )
}

export default ProjectCard;
