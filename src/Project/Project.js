import React from "react";
import "./Project.css";
import PropTypes from "prop-types"

function Project(props) {
  return (
    <section className="project-area">
      Your random API is: <br/>
      {props.api} <br/>
      Here is a link: <br/>
      <a href={props.link}>Link to your API!</a> <br/>
      Here is a brief description: <br/>
      {props.description} <br/>
      Your target audience is: <br/>
      {props.audience} <br/>
      Good luck! <br/>
      <button className="save-to-favorites" onClick={props.saveProject}>Save To Favorites</button>
    </section>
  )
}


export default Project;
