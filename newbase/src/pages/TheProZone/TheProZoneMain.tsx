//navigate between engineering qualifications, and educational projects

import './TheProZoneMain.css'
//navigates between Music, The workout zone, and the "does mitchell have a crush on you page", video game modding
//TO DO: make name header a bunch of random colors for each letter
import NavBar from "../../components/navBar"

function NameHeader(){
    return (
        <>
            <div>
                <h1>Professional Portfolio</h1>
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