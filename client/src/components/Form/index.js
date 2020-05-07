import React, {useState} from "react";
import API from "../../utils/API"
import "./style.css"


function SubmitForm () {
    const[state, setState]= useState({})

   function handleInputChange (event) {
        const { name, value } = event.target
        setState({...state, [name]: value})
   }

   function handleFormSubmit (event) {
        event.preventDefault();
        API.postMessage({
            name: state.name,
            email: state.email,
            message: state.message
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
   }


    return (<>
        <form id="form">
            <div class="form-group">
                <label for="formGroupExampleInput">Name</label>
                    <input type="text" onChange = {handleInputChange} name="name" class="form-control" id="formGroupExampleInput" placeholder="John Smith"/>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Email</label>
                    <input type="email" onChange = {handleInputChange} name="email" class="form-control" id="formGroupExampleInput2" placeholder="example@gmail.com"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" onChange = {handleInputChange} name="message"  id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>
            <button type="submit" onClick={handleFormSubmit}>Send</button>
        </form> 
    </>)
}

export default SubmitForm; 