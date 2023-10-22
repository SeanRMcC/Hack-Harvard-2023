
import React from 'react'

export default function Logout(props) {
    console.log("clicked")
    
    return (
        <div className='logout'>
            <button 
                className='logout-btn'
                onClick={props.handleSignOut}
            >
                Sign Out
            </button>
        </div>
    )
}