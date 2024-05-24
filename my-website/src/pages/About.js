import './About.css'
export default function About() {
    return <div className="About">
        <div className='Title'>
            <h1>About Me!</h1>
        </div>
        <div className='List-box'>
            <h2><u>Background</u></h2>
            <p>I was born in Los Angeles and always had an interests in computers and games.
            The business world with all of the decision making and articulate planning also piqued my interest. 
            With my career I plan to enter the IT/Cybersecurity fields for major businesses!
            I believe the security of personal and private information of people is important in our technological world.
            For fun I love to work on projects on small arduino kits or work on my website building skills!</p>
            <span><img src = "https://preview.redd.it/coding-cat-is-raising-your-productivity-3-v0-dtkrm36qtnb81.png?auto=webp&s=bf17359fa9c55f41e0e1910558f4a8475b28091c" alt="Funny cat" style={{height: 150, width: 200, marginLeft: 50}}/></span>
            <span><a className="resume" href="https://docs.google.com/document/d/18tfKwqOB4_5iSptCyYsMRVmyDrEdPxuQ6I-arvvgsCs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Click here for my resume!!</a></span>
        </div>
    </div>
}