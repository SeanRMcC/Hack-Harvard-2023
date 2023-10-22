import React from 'react'
import LeaderboardCollection from './LeaderboardCollection'
import { usersCollection } from '../firebase'
import { getDocs, doc } from 'firebase/firestore'

export default function Leaderboard() {
    // state to maintain all urls
    const [leaderboard, setLeaderboard] = React.useState([])

    // sort leaderboard array (to pass into LeaderboardCollection component)
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // initialize new array to store updated docs
                let tempLeaderboard = []
                // obtain all docs from usersCollection
                const querySnapshot = await getDocs(usersCollection);
                querySnapshot.forEach((doc) => {
                    // const docRef = doc(usersCollection, document.id)
                    tempLeaderboard.push(doc.data())
                    // console.log(doc.id, " => ", doc.data());
                });
                console.log("success", tempLeaderboard)
                setLeaderboard(prev => tempLeaderboard)
                console.log("state", leaderboard)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);
    
    // const sortedLeaderboard = leaderboard.sort((a, b) => b.resting_hr - a.resting_hr)
    
    // code to pull from Cloud Firestore here
    return (
        <LeaderboardCollection leaderboard={leaderboard} />
    )
}