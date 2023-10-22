import React from 'react';
import Button from './Button.jsx';
import Login from './Login'
import Logout from './Logout'
import { Link } from 'react-router-dom';


export default function Nav({ isAuthenticated, handleSignOut, setUserDocRef }) {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li className="noConnect"><Link to="/">Home</Link></li>
                    <li className="noConnect"><Link to="/leaderboard">Leaderboard</Link></li>
                    <li className="noConnect"><Link to="/graph">Graph</Link></li>

                    {isAuthenticated ? 
                        <>
                            <li className="connectWearable">{<Button/>}</li>
                            <li className="connectWearable">{<Logout handleSignOut={handleSignOut}/>}</li>
                        </>
                        :
                        <li className="connectWearable">{<Login setUserDocRef={setUserDocRef}/>}</li>
                    }
                </ul>
            </nav>
        </div>
    )
}
