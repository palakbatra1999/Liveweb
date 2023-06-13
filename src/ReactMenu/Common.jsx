import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <div>
          <section id="header" className='d-flex align-items-center'>
              <div className='container-fluid nav-bg'>
                  <div className='row'>
                      <div className='col-10 mx-auto d-flex justify-content-center flex-column'>
                          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                              <h1>{props.heading} </h1>
                              <h3 className='my-3'>We are a team of skilled developers.</h3>
                              <div className='mt-3'>
                                  <NavLink className='btn-get-started' to={props.visit}>{props.para}</NavLink>
                              </div>

                          </div>

                          <div className='col-lg-6 order-2 order-lg-1 header-img'>
                              {/* <img src={lollipop} className='img-fluid animated' alt="About-img" /> */}

                          </div>
                      </div>
                  </div>
              </div>

          </section>
    </div>
  )
}

export default Common
