//navigate between engineering qualifications, and educational projects

import './TheProZoneMain.css'
//navigates between Music, The workout zone, and the "does mitchell have a crush on you page", video game modding
//TO DO: make name header a bunch of random colors for each letter
import NavBar from "../../components/navBar"


function NameHeader(){
    return (
        <>
            <div className="ProfessionalSummary">
                <h1>Mitchell Mazzoni - Software Engineer</h1>
                <h2 className="sectioncontent">Hello! I am a well rounded software engineer with a combined four years of professional experience across devops, computer vision, machine learning, and simulation. I completed my Master's in Computer Science with a specialization in machine learning at the Georgia Institute of Technology in 2025 and am currently pursuing new job opportunities. I develop and modify video games as a hobby, which has involved significant work in C#, SQL, and open source contributions, and the software I developed for this hobby has a collective 140K+ downloads. Most recently I have been pursuing AWS certifications and developing this website, after familiarizing myself with typescript, react, and node.</h2>
            </div>
        </>
    )
}

function Education(){
    return (
        <>
            <div className = "Education">
                <h2>Education</h2>
                <ul className="sectioncontent">
                    <li>Georgia Institute of Technology - BS in Aerospace Engineering - 2019</li>
                    <li>Georgia Institute of Technology - MS in Computer Science with Machine Learning Specialization - 2025
                        <ul className="SubList"><h4>Relevant Coursework</h4>
                            <li>Deep Learning</li>
                            <li>Network Science</li>
                            <li>Computer Vision</li>
                            <li>Human Computer Interaction</li>
                            <li>Machine Learning</li>
                            <li>Graduate Algorithms</li>
                            <li>Artificial Intelligence</li>
                            <li>Database Systems, Concepts, and Design</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}




function WorkExperience(){
    return (
        <div className="WorkExperience">
            <h2>Work Experience</h2>
        </div>
    )
}


function TheProZoneMain(){
    return (
        <div>
            <NavBar />
            <NameHeader />
            <Education />
            <WorkExperience />
        </div>
    )
}

export default TheProZoneMain;