<<<<<<< HEAD
export default function Graph() {
=======
import { lineGraphDays30, lineGraphDays14, barGraphDays7, barGraphDays3 } from './GraphCalls.jsx';
>>>>>>> 3c1737a (Add graph features)

function Graph() {
    // Replace with unique user_ID
    const user_id = "5f4c5ac9-c2c5-4bfd-9f98-9d810ceb4af5"
    return (
        <div className='graph'>
            <ul>
                <li>{lineGraphDays30(user_id, 500, 500)}</li>
                <li>{lineGraphDays14(user_id, 500, 500)}</li>
                <li>{barGraphDays7(user_id, 500, 500)}</li>
                <li>{barGraphDays3(user_id, 500, 500)}</li>
            </ul>
        </div>
    )
}

export default Graph;