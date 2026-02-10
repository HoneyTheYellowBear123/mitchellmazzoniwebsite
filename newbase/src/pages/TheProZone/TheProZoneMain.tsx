//navigate between engineering qualifications, and educational projects


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

function TheProZoneMain(){
    return (
        <div>
            <NavBar />
            <NameHeader />
        </div>
    )
}

export default TheProZoneMain;