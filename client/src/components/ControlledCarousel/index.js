import React, { useState, useEffect } from "react";
import Carousel  from "react-bootstrap/Carousel"
import API from "../../utils/API";

function ControlledCarousel () {
    const [myPortfolio, setMyPortfolio] = useState({
        portfolio: []
    })

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(()=>{
        loadPort()
    },[])

   function loadPort() {
        API.getProjects()
        .then(res => {

             let mapped = res.data.map(port => ({
                title: port.title,
                description: port.description,
                image: port.image,
                githubRepo: port.githubRepo,
                githubPages: port.githubPages,
                heroku: port.heroku 
            }))

            console.log(mapped)
            setMyPortfolio({...myPortfolio,
            portfolio: mapped
            })
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (<>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} slide={true}>
            {myPortfolio.portfolio.map((portCard, i) =>  
            <Carousel.Item key={i + "-portfolio"}>
                <img className="d-block w-100" src={portCard.image}  alt={portCard.title}/>
                <Carousel.Caption>
                    <h3>{portCard.title}</h3>
                        <p>{portCard.description}</p>
                        <a href={portCard.githubRepo}></a>
                </Carousel.Caption>
                </Carousel.Item> 
            )}  
        </Carousel>
   </> )
}

export default ControlledCarousel;