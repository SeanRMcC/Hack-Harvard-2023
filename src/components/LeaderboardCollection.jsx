import React from 'react'

export default function Leaderboard(props) {

    const sortedLeaderboard = props.leaderboard.sort((a, b) => b.score - a.score)

    console.log("sorted", sortedLeaderboard[0])
    const leaderboard = sortedLeaderboard.map((element, index) => (
        <div key={index}>
            <span className='leaderboard-row'>
                {element.name}
                {element.last_resting_hr || "null"}
                {element.score}
            </span>
        </div>
    ))
    console.log(leaderboard)


    return (
        <div className='all-urls'>
            {leaderboard}
        </div>
    )
}
