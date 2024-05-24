import React from 'react'
import MyImage from './MCPro.png';
import './Herosection.css'

const Herosection = () => {
  return (
    <div className='hero-wrapper'>
        <div className='myImage'>
            <img src={MyImage} alt="Professional" style={{marginTop: 60, borderRadius: 100}} className='expand-on-hover'/>  
        </div>
        <div className='hero-p'>
            <p>Hi my name is Matthew Cedeno!!</p>
            <p>I am currently enrolled in UCR as a Computer Science with Business Applications major!</p>
        </div>
    </div>
  )
}

export default Herosection