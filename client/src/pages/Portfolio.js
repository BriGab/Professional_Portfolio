import React, {useEffect, useState} from "react"
import { Carousel, Container, Row, Col } from "react-bootstrap"
import CardImage from "../components/CardImage"
import CardInfo from "../components/CardInfo"
import CopyRight from "../components/CopyRight"
import "../style/style.css"
import API from "../utils/API";

function Portfolio () {
    const [index, setIndex] = useState(0);

    const [myPortfolio, setMyPortfolio] = useState([])

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
        loadPort();
    }, []);

    function loadPort() {
        API.getProjects() 
        .then(res => {
            setMyPortfolio(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
 

return (
   <Container id="port" fluid className="all">
       <div><h6 id="projects">Featured Projects</h6></div>
        <Row>      
            <Col>
                    {!myPortfolio.length ? (
                        <div style={{ padding: "100px 50%", width: 16, height: 300 }}>
                        <   i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true" />
                        </div>
                    ) : (
                    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect} controls={true} indicators={true}>
                    
                        {myPortfolio.map(carousel => {
                            return (     
                            <Carousel.Item key={carousel._id}>
                            <CardImage className="text"
                                image={carousel.image}
                                title={carousel.title}
                            />
                            <CardInfo id="text"
                                title={carousel.title}
                                githubPages={carousel.githubPages}
                                githubRepo={carousel.githubRepo}
                                heroku={carousel.heroku}
                                description={carousel.description}
                            />
                            </Carousel.Item>
                            )
                        })}
        
                    </Carousel> 
                    )}
            </Col>
        
        </Row>
        <CopyRight />
    </Container>
)
}
export default Portfolio;