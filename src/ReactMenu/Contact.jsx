import React from 'react'
import { useState } from 'react'

const Contact = () => {
const[name,setname]=useState("");
    const [email, setemail] = useState("");
    const [feedback, setfeedback] = useState("");
    const [number, setnumber] = useState("");

    const nameInputEvent = (event) =>{
        setname(event.target.value);
    }

    const numberInputEvent = (event) => {
        setnumber(event.target.value);
    }
    const emailInputEvent = (event) => {
        setemail(event.target.value);
    }
    const feedbackInputEvent = (event) => {
        setfeedback(event.target.value);
    }

    const formSubmit = (e) =>{
      e.preventDefault();
        alert(`${name}, thankyou for the feedback`);
        setemail("");
        setname("");
        setnumber("");
        setfeedback("");
    }
  return (
  <>
          <div className='my-5'>
              <div className='text-center'>
                  <h1>contact us</h1>

              </div>
          </div>
    <div className='container'>
        <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
                      <form onSubmit={formSubmit}>
                          <div class="form-group">
                              <label for="exampleInputNAme">Name</label>
                              <input type="text"
                               class="form-control"
                                id="exampleInputname1" 
                                value={name}
                                onChange={nameInputEvent}
                                aria-describedby="nameHelp" 
                                  name="name"
                                placeholder="Name"/>
                                
                          </div>
                          <div class="form-group">
                              <label for="exampleInputphonenumber">Phone Number</label>
                              <input type="phone"
                                  class="form-control"
                                  id="exampleInputnumber"
                                  value={number}
                                  aria-describedby="phonenumberHelp"
                                  name="number"
                                  onChange={numberInputEvent}
                                  placeholder="Phone number" />

                            
                          </div>
                          <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email"
                                  class="form-control"
                                  value={email}
                                  id="exampleInputEmail1"
                                  onChange={emailInputEvent}
                                  aria-describedby="emailHelp"
                                  name="email"
                                  placeholder="Enter email" />
                              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                          <div class="form-group">
                              <label for="feedback">feedback</label>
                              <textarea type="text" class="form-control"
                               id="feedback" 
                              value={feedback} 
                                  onChange={feedbackInputEvent}
                              name="feedback" placeholder="Please share your valuable feedback"/>
                          </div>
                          <div class="form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                      </form>

        </div>

        </div>
    </div>
  </>
  )
}

export default Contact
