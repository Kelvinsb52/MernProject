import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutDetails = ( {workout} ) => {
    const {user} = useAuthContext()
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () =>
    {
        if(!user)
        {
            return
        }
        const response = await fetch('/api/workouts/' + workout._id,
            {
                method: 'DELETE',
                headers: {'Authorization': `Bearer ${user.token}`
                }
            })
        const json = await response.json()

        if(response.ok) 
        {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>reps: </strong>{workout.reps}</p>
            <span onClick={handleClick}>delete</span>
            <p>{workout.createdAt}</p>
        </div>
    )
}


export default WorkoutDetails