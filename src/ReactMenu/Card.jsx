import React from 'react'
import lollipop from '../Images/lollipop.png'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
          <div className='col-md-3 col-10 mx-auto'>


              <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={lollipop} alt="Card image cap" />
                  <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.para}</p>
                      <NavLink href="#" className="btn btn-primary">Check more</NavLink>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Card
