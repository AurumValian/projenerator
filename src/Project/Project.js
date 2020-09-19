import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <section className="project-area">
      Your random API is: <br/>
      {props.api} <br/>
      Your target audience is: <br/>
      {props.audience} <br/>
      <button className="save-to-favorites" onClick={props.saveProject}>Save To Favorites</button>
    </section>
  )
}

export default Project;
