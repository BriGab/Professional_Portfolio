import React from "react";
import {Carousel} from "react-bootstrap"
import "./style.css"

function CardInfo (props) {

    return (<>
      <Carousel.Caption id="words">
        <a className="carLinks" href={props.githubPages ? props.githubPages : props.heroku} rel="noopener noreferrer" target="_blank"><h3>{props.title}</h3></a>
        <a className="carLinks" href={props.githubRepo} rel="noopener noreferrer" target="_blank"> <i id="gitLinks" className="fa fa-github"></i></a>
          <p id="description">{props.description}</p>
        </Carousel.Caption>
  </>)
}

export default CardInfo;