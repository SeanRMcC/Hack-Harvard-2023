import React from 'react'
import LeaderboardCollection from './LeaderboardCollection'
import { usersCollection } from '../firebase'
import { getDocs } from 'firebase/firestore'

export default function Leaderboard() {
    // state to maintain all urls
    const [leaderboard, setLeaderboard] = React.useState([])

    // sort leaderboard array (to pass into LeaderboardCollection component)
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(usersCollection);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);
    
    const sortedLeaderboard = leaderboard.sort((a, b) => b.resting_hr - a.resting_hr)
    
    // code to pull from Cloud Firestore here
    return (
        <div>
            leaderboard
        </div>
        // <LeaderboardCollection sortedLeaderboard={sortedLeaderboard} />
    )
}