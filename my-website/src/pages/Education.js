import EducationDisplay from '../components/EducationDisplay'
import './Education.css'
export default function Education() {
    return <div className='Education'>
        <div className='sectionTitle'>
            <h1>Education</h1>
        </div>
        <div className='Display'>
           <EducationDisplay></EducationDisplay> 
        </div>
        <hr/>
        <div className='sectionTitle'>
            <h1>Skills</h1>
        </div>
        <div className='Display'>
            <div className='skillFlex'>
                <div className='Skill'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" alt="C++" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>C++</p>
                </div>
                <div className='Skill'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>C</p>
                </div>
                <div className='Skill'>
                    <img src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="HTML" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>HTML</p>
                </div>
                <div className='Skill'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png" alt="CSS" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>CSS</p>
                </div>
                <div className='Skill'>
                    <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="Javascript" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>Javascript</p>
                </div>
                <div className='Skill'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="Linux" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>Linux</p>
                </div>
                <div className='Skill'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png" alt="SQL" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>SQL</p>
                </div>
                <div className='Skill'>
                    <img src="https://banner2.cleanpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg" alt="NodeJS" style={{height: 60}}/>
                    <p style={{textAlign: 'center'}}>NodeJS</p>
                </div>
            </div>
        </div>
    </div>
}