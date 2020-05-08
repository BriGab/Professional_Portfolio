import React from "react";
import SubmitForm from "../components/Form"
import CopyRight from "../components/CopyRight"
import "../style/style.css"

function Contact () {



return ( <>
    <div className="background all fluid" >
        <div><h6 id="contact">Let's Connect.</h6></div>
        <br/>
        <div>
        <SubmitForm/>
        </div> 
        <br/>
        <center><div>
        <a href="https://www.linkedin.com/in/briana-gabiola" rel="noopener noreferrer" target="_blank"> <i id="linkedin" className="fa fa-linkedin-square"></i></a>
        <a href="https://github.com/BriGab" rel="noopener noreferrer" target="_blank"> <i id="git" className="fa fa-github"></i></a>
        <a href="mailto:brigabiola@outlook.com" rel="noopener noreferrer" target="_blank"><i id="email" className="fa fa-envelope"></i></a>
        <a href="/images/Gabiola_Resume.pdf" rel="noopener noreferrer" target="_blank"><i id="pdf" className="fa fa-file-pdf-o"></i></a>
        </div></center>
        <CopyRight/>
   </div>
</>)
}

export default Contact;