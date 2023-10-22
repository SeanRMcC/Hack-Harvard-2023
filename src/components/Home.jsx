export default function Home(props) {

    return (
        <div className='home'>
            {props.isAuthenticated 
                ? 
                <h1 className="welcome"> Hello, {props.user.displayName}</h1>
                :
                <h1 className="welcome"> Please sign in to access TrendTrack </h1>
            }
        </div>
    )
}