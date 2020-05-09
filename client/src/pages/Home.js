import React from "react";
import CopyRight from "../components/CopyRight";
import Icons from "../components/Icons";
import "../style/style.css";

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
          <Icons/>  
    </div>
    <CopyRight/>
</div>
)
}

export default Home;