import {useState} from "react";


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}





function WorkoutButtonWithStats() {

    function clickWorkoutButton(){
        setCalories( currentCaloriesExpeded + getRandomArbitrary(0.012, 0.035) )
        setCount(timesclicked + 1)
        console.log("workout button was clicked!")
        console.log(timesclicked)
    }

    function WorkoutButton(){

        return <button onClick={clickWorkoutButton}> The Workout Button </button>
    }

    const [timesclicked, setCount] = useState(0)
    const [currentCaloriesExpeded, setCalories] = useState(0)




    if (timesclicked < 1)
    {
        return (
            <div>
                <WorkoutButton />
            </div>
        )
    }
    else
    {
        return (
            <div>
               <WorkoutButton />
                <h2>Total times clicked: {timesclicked}</h2>
                <h2>Total calories expended: {currentCaloriesExpeded}</h2>
            </div>
        )
    }
}

export default WorkoutButtonWithStats;