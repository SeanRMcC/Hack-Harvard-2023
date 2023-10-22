import React from 'react'

export default function URLCollection(props) {


    const urlElements = props.sortedLeaderboard.map((element, index) => (
        <div key={index}>
            {element.resting_hr} 
        </div>
    ))

    return (
        <div className='all-urls'>
            {urlElements}
        </div>
    )
}
