import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useState, useEffect } from "react"

export default function Home(props) {

    const [streak, setStreak] = useState(-1);
    const [goal, setGoal] = useState("");
    const [points, setPoints] = useState(0);

    useEffect(() => {

        async function prepareData(){
            console.log("Doc ref: ",props.userDocRef);
            if(!props.userDocRef){
                return;
            }
            const docSnap = await getDoc(props.userDocRef);
            if(docSnap.exists()){
                const data = await docSnap.data();
                console.log("Data: ",data);
                setStreak(data.streak);
                setGoal(data.goal);
                setPoints(data.points);
            }
        }

        prepareData();

    });

    return (
        <div className='home'>
            
            {props.isAuthenticated 
                ? 
                <h1 className="welcome"> Hello, {props.user.displayName}{streak}{goal}{points}</h1>
                :
                <h1 className="welcome"> Please sign in to access TrendTrack </h1>
            }
        </div>
    )
}