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
            <p><b>Hi my name is Matthew Cedeno!!</b></p>
            <p><b>I am currently enrolled in UCR as a Computer Science with Business Applications major!</b></p>
        </div>
    </div>
  )
}

export default Herosection