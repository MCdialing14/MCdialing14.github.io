import './Experience.css'
import mazeImage from './Maze.png'
import gameImage from './2048.png'
import certImage from './googleCert.png'
export default function Experience() {
    return <div className='Experience'>
        <div className="expTitle">
            <h1>Experience</h1>
        </div>
        <div className='expList'>
            <ul>
            </ul>
            <p>I currently lack work experience but I am always looking for new opportunities!</p>
            <p>From the projects I've worked on I've learned,</p>
            <ul>
                <li>Communication skills</li>
                <li>Work ethic</li>
                <li>Teamwork</li>
                <li>Time management</li>
                <li>Problem solving</li>
            </ul>
        </div>
        <hr/>
        <div className="expTitle">
            <h1>List of Projects</h1>
        </div>
        <div className='projectNode'>
            <a href="https://youtu.be/guqRGLP3Nfc" target="_blank" rel="noopener noreferrer"><img src={mazeImage} alt="Arduino Maze Game" style={{height: 200, width: 400}}/></a>
            <div className='textSection'>
                <span className='projectTitle'><h2><u>Arduino Maze Game</u></h2></span>
                <ul className='projectList'>
                    <li>Contained 4 unique arduino components</li>
                    <li>Allowed players to experience three different outcomes</li>
                    <li>16-bit music composed from scratch</li>
                    <li>Click on the image for a demo video!</li>
                    <li><a href="https://github.com/MCdialing14/CSMazeGame" target="_blank" rel="noopener noreferrer">Click here for Github link!</a></li>
                </ul> 
            </div>
        </div>
        <div className='projectNode'>
            <a href="https://github.com/MCdialing14/CS100FinalProject" target="_blank" rel="noopener noreferrer"><img src={gameImage} alt="2048 Game" style={{height: 200, width: 400}}/></a>
            <div className='textSection'>
                <span className='projectTitle'><h2><u>Terminal 2048 Game</u></h2></span>
                <ul className='projectList'>
                    <li>Contained 4 unique arduino components</li>
                    <li>Allowed players to experience three different outcomes</li>
                    <li>16-bit music composed from scratch</li>
                    <li>Click on the image for a Github link!</li>
                </ul> 
            </div>
        </div>
        <hr/>
        <div className="expTitle">
            <h1>Certificates</h1>
        </div>
        <div className='certificate'>
            <p><u><b>Google Cybersecurity Certificate</b></u></p>
            <img src={certImage} alt="Google Cybersecurity Certificate" style={{height: 300, width: 400}}/>
            <p>Viewable on my LinkedIn profile and <a href="https://www.credly.com/badges/232e8d6d-0324-4c3d-9253-56080e58e31d/linked_in_profile" target="_blank" rel="noopener noreferrer">Credly</a></p>
        </div>
    </div>
}