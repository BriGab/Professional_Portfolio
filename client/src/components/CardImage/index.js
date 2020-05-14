import React from "react"
import "./style.css"


function CardImage (props) {
    return (<>
            <center><img
                className="d-block w-100 cardStyle"
                src={props.image}
                alt={props.title}
            /></center> 
   </>)
}

export default CardImage