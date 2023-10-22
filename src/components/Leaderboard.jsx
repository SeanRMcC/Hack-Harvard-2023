import React from 'react'
import LeaderboardCollection from './LeaderboardCollection'
import { usersCollection } from '../firebase'
import { getDocs } from 'firebase/firestore'

export default function Leaderboard() {
    // state to maintain all urls
    const [leaderboard, setLeaderboard] = React.useState([])

    // sort leaderboard array (to pass into LeaderboardCollection component)
    const sortedLeaderboard = leaderboard.sort((a, b) => b.resting_hr - a.resting_hr)
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
    
    // // use onSnapshot to update allURLs `state`
    // React.useEffect(() => {

    //     // user clean-up function to avoid memory leak
    //     const unsubscribe = onSnapshot(
    //         currentUserCollection, function (snapshot) {
    //             const updatedLeaderboard = snapshot.docs.map((doc) => ({
    //                 ...doc.data(),
    //                 id: doc.id
    //             }))
    //             setLeaderboard(updatedLeaderboard)
    //         }
    //     )
    //     return unsubscribe // return clean-up function
    // }, []) // re-run every time user changes ????
    
    // code to pull from Cloud Firestore here
    return (
        <div>
            leaderboard
        </div>
        // <LeaderboardCollection sortedLeaderboard={sortedLeaderboard} />
    )
}