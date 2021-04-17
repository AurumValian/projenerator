import React from "react";
import "./Project.css";
import PropTypes from "prop-types"

function Project(props) {
  return (
    <section className={"project-area " + props.subject}>
    {props.subject === "programming" && (
      <div>
        Your goal is to make a website using the following specifications. <br/>
        Your API is: <br/>
        {props.api} <br/>
        Here is a link: <br/>
        <a href={props.link}>Link to your API!</a> <br/>
        Here is a brief description: <br/>
        {props.description} <br/>
        Your target audience is: <br/>
        {props.audience} <br/>
        Good luck! <br/>
      </div>
    )}
    {props.subject === "persuasiveTopics" && (
      <div>
        Your topic is: {props.topic} <br/>
        Your stance is: {props.stance} <br/>
        Good luck! <br/>
      </div>
    )}
    <button className="save-to-favorites" onClick={props.saveProject}>Save To Favorites</button>
    </section>
  )
}

Project.propTypes = {
  subject: PropTypes.string,
  topic: PropTypes.string,
  stance: PropTypes.string,
  api: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  audience: PropTypes.string,
  saveProject: PropTypes.func
}


export default Project;
