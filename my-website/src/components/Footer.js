import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <a href="https://github.com/MCdialing14" target="_blank" rel="noopener noreferrer">
        <div className="git-image">
            <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" style={{height: 100, width: 100, marginLeft: 100}} alt="Github Profile"/> 
        </div>
        </a>
        <a href="https://www.linkedin.com/in/matthew-cedeno-43b298225/" target="_blank" rel="noopener noreferrer">
        <div className="link-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" style={{height: 100, width: 100, marginLeft: 200}} alt="LinkedIn Profile"/> 
        </div>
        </a>
        <a href="mailto:mcede002@ucr.edu" target="_blank" rel="noopener noreferrer">
        <div className="link-image">
            <img src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png" style={{height: 100, width: 100, marginLeft: 300}} alt="LinkedIn Profile"/> 
        </div>
        </a>       
    </div>
  )
}

export default Footer