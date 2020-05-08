import React from "react";
import CopyRight from "../components/CopyRight"
import "../style/style.css"

function Home () {

return (
<div className="background all fluid">
    <div id="main">
        <h1 id="name">Hi, I'm Bri</h1>
            <div id="bio">
                <p> A full stack web developer from Boise, ID. 
                    Inspired by those AHA! moments and experienced 
                    in creative problem solving. Eager to jump on a team
                    and collaborate on projects.
                </p>
            </div>
            <center><img id="headShot" src="./images/circle-cropped-md.png" alt="Bri"></img></center>
            <center><h4 id="tech">TechStack:</h4></center>
            <center>
            <div>
                <i className="icon devicon-mongodb-plain-wordmark colored"></i>
                <i className="icon white devicon-express-original colored"></i>
                <i className="icon devicon-react-original-wordmark colored"></i>
                <i className="icon devicon-nodejs-plain colored"></i>
                <br/>
                <i className="icon devicon-html5-plain-wordmark colored"></i>
                <i className="icon devicon-javascript-plain colored"></i>
                <i className="icon devicon-css3-plain-wordmark colored"></i>
                <i className="icon sp devicon-mysql-plain-wordmark colored"></i>
                <i className="icon devicon-bootstrap-plain-wordmark colored"></i>
                <i className="icon devicon-jquery-plain-wordmark colored"></i>
                <i className="icon devicon-sequelize-plain colored"></i>
                <br/>
                <i className="icon white devicon-github-plain-wordmark colored"></i>
                <i className="icon devicon-heroku-line-wordmark colored"></i>
            </div>
            </center>
    </div>
    <CopyRight/>
</div>
)
}

export default Home;