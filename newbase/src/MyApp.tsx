import './MyApp.css'

import NameHeader from "./frontpage";
import WorkoutButtonWithStats from "./theWorkoutZone";

function MyApp() {
    return (<div>
            <NameHeader />
            <WorkoutButtonWithStats/>
    </div>
        )
        ;
}

export default MyApp;