import React from 'react'

export default function Leaderboard(props) {


    const leaderboard = props.sortedLeaderboard.map((element, index) => (
        <div key={index}>
            {element.resting_hr}
        </div>
    ))

    return (
        <div className='all-urls'>
            {leaderboard}
        </div>
    )
}
