import React from 'react'
import './Topbar.css'

const Topbar = () => {
  return (
    <nav class="navbar">
        <a href="/" className="Site-title">
            Matthew Cedeno
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/About">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Education">Education/Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Experience">Experience/Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Extra">Extracurricular/Interests</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Topbar