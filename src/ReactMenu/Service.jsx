import React from 'react'
import lollipop from '../Images/lollipop.png'
import { NavLink } from 'react-router-dom'
import Card from './Card'
import sdata from './Sdata';
const Service = () => {
  return (
  <>
    <div className='my-5 mx-auto'>
    <h1 className='text-center'>Our Services</h1>
    </div>

          <div className='container-fluid mb-5'>
              <div className='row'>
                  <div className='col-10 mx-auto'>

                   <div className='row gy-5'>
                  
                          
                 {
                    sdata.map((val,index)=>{
                      return <Card 
                      key={index}
                        title={val.title} 
                        para={val.para}
                      />
                    })
                 }
               
                  </div>

                  </div>
              </div>
          </div>
  </>
  )
}

export default Service
