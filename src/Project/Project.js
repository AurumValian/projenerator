import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <section className="project-area">
      Your random API is: <br/>
      {props.project.api} <br/>
      Your target audience is: <br/>
      {props.project.audience} <br/>
      <button className="save-to-favorites" onClick={props.saveProject}>Save To Favorites</button>
    </section>
  )
}

export default Project;
