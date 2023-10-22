export default function Home(props) {
    const score = 42;
    const streak = '8 days!';
    const goal = 'Lower HR';
    
    return (
        <div className='home'>
            {props.isAuthenticated 
                ?
                <>
                    <h1 className="welcome"> Hello, {props.user.displayName}</h1>
                    <div className="stats">
                        <h2>
                            Score: {score}
                        </h2>
                        <h2>
                            Streak: {streak}
                        </h2>
                        <h2>
                            Goal: {goal}
                        </h2>
                    </div>
                </> 

                :
                <h1 className="welcome"> Please sign in to access TrendTrack </h1>
            }
        </div>
    )
}