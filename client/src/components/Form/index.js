import React, {useState} from "react";
import API from "../../utils/API"
import "./style.css"


function SubmitForm () {
    const[state, setState]= useState({})

   function handleInputChange (event) {
        const { name, value } = event.target
        setState({...state, [name]: value})
        document.getElementById("hideMe").classList.remove("showMe")
   }

   function handleFormSubmit (event) {
        event.preventDefault();
        API.postMessage({
            name: state.name,
            email: state.email,
            message: state.message
        })
        .then(res => {
        })
        .catch(err => {
            console.log(err)
        })
        document.getElementById("hideMe").className= "showMe"
        document.getElementById("form").reset()
   }


    return (<>
        <form id="form">
            <div className="form-group">
                <label for="formGroupExampleInput">Name</label>
                    <input type="text" onChange = {handleInputChange} name="name" className="form-control" id="formGroupExampleInput" placeholder="John Smith"/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                    <input type="email" onChange = {handleInputChange} name="email" className="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" onChange = {handleInputChange} name="message"  id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>
            <button type="submit" onClick={handleFormSubmit}>Send</button> <p id="hideMe">Message Sent!</p>
        </form> 
    </>)
}

export default SubmitForm; 