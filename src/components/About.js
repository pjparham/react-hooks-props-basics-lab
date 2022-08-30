import React from "react";
import Links from "./Links"
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
       {props.bio ? <p> {props.bio} </p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     {/* <Links linkedin={user.links.linkedin} github={user.links.github}/> */}
     <Links linkedin={props.linkedin} github={props.github}/>
    </div>
  );
}

export default About;
