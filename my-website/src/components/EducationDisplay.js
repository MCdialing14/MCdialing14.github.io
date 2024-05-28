import React from 'react'
import './EducationDisplay.css'

const EducationDisplay = () => {
  return (
    <div className='container'>
        <div className='SchoolNode'>
            <span className='schoolImage'><img src="https://visitriverside.com/wp-content/uploads/2024/02/cdn_r3Nhko47ZxG8mtvMOhYqWPfGHu_3KC6-.webp" alt="University of California Riverside" style={{height: 200, width: 300}}/></span>
            <div className='textSection'>
                <span className='schoolTitle'><h2><u>University of California Riverside</u></h2></span>
                <ul className='schoolList'>
                    <li>Currently completing major for Computer Science with Business Applications</li>
                    <li>Going for Masters in Computer Science</li>
                </ul> 
            </div>
        </div>
        <div className='SchoolNode'>
            <span className='schoolImage'><img src="https://veniceoarsman.com/wp-content/uploads/2021/05/IMG_4972-900x600.jpeg" alt="Venice Senior High" style={{height: 200, width: 300}}/></span>
            <div className='textSection'>
                <span className='schoolTitle'><h2><u>Venice Senior High</u></h2></span>
                <ul className='schoolList'>
                    <li>Enrolled in the STEM magnet program</li>
                    <li>Attended and competed in the MESA club</li>
                    <li>Graduate</li>
                </ul> 
            </div>
        </div>
    </div>
  )
}

export default EducationDisplay