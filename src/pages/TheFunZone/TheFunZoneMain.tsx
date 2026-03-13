//navigates between Music, The workout zone, and the "does mitchell have a crush on you page", video game modding
//TO DO: make name header a bunch of random colors for each letter
import NavBar from "../../components/navBar"
import WorkoutButtonWithStats from "./theWorkoutZone";

function NameHeader(){
    return (
        <>
            <div>
                <h1>The Fun Zone</h1>
            </div>
        </>
    )
}

function TheFunZoneMain(){
    return (
        <div>
            <NavBar />
            <NameHeader />
            <WorkoutButtonWithStats />
        </div>
    )
}

export default TheFunZoneMain;