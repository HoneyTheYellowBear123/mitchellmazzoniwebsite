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
                <h2>Hello! I am a well rounded software engineer with a combined four years of professional experience across devops, computer vision, machine learning, and simulation. I completed my Master's in Computer Science with a specialization in machine learning at the Georgia Institute of Technology in 2025 and am currently pursuing new job opportunities. I develop and modify video games as a hobby, which has involved significant work in C#, SQL, and open source contributions, and the software I developed with this hobby has a collective 140K+ downloads. Most recently I have been pursuing AWS certifications and developing this website, after familiarizing myself with typescript, react, and node.</h2>
            </div>
        </>
    )
}

function Education(){
    return (
        <>
            <div>
                <h3>Education</h3>
                <ul>
                    <li>Georgia Institute of Technology - BS in Aerospace Engineering - 2019</li>
                    <li>Georgia Institute of Technology - MS in Computer Science with Machine Learning Specialization - 2025</li>
                </ul>
            </div>
        </>
    )
}

function TheProZoneMain(){
    return (
        <div>
            <NavBar />
            <NameHeader />
            <Education />
        </div>
    )
}

export default TheProZoneMain;