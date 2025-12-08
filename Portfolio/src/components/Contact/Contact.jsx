import React from 'react'
import contactImage from "../../assets/contact.png"
import "./Contact.css"
const Contact = () => {
  return (
    <div id='contact'>

        <img src={contactImage} alt="" />
   
      <div className="rightabout">
      
            <form action="https://formspree.io/f/xovpopoa" method="POST" >
                <label htmlFor="name">
                    <input type="text"  id="name" name='userName' placeholder='Name' required/>
                </label>
                 <input type="email"  id="name" name='email' placeholder='Email' required />
                    <textarea name="message" id=""  placeholder='Message ME' required></textarea>
                   <div className="btn"> <button>Submit</button></div>
                   

            </form>
        </div>
      </div>
 
  )
}

export default Contact
