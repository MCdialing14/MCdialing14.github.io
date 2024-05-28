import './Extra.css'
export default function Extra() {
    return <div className="Extra">
        <div className="extraTitle">
            <h1>Extracurricular</h1>
        </div>
        <div className="extraList">
            <div className="listItem">
                <img src="https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/43681/1/?bust=1696542671" alt="Best friends society" style={{height: 200}}/>
                <h2><u>Fosterer - Best Friends Society (2017-2018)</u></h2>
                <ul className="text">
                    <li>Volunteered with Best Friends for two years</li>
                    <li>Cared for and noted measurements for growing animals</li>
                    <li>Food management, BMI calculation, and weight averages</li>
                </ul>  
            </div>
            
            <hr/>

            <div className="listItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMcsWFNPOUerLpfrNn6Ig-BDteKNpkiJgIxXN69x2ng&s" alt="Star Education" style={{height: 200}}/>
                <h2><u>Counselor in Training - Star Education (2014-2016)</u></h2>
                <ul>
                    <li>Volunteered with Star Education for two years</li>
                    <li>Helped set up activities and manage children</li>
                    <li>Learned to communicate and work together with other counselors</li>
                </ul> 
            </div>
            
        </div>
    </div>
}