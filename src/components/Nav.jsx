import React from 'react';
import Button from './Button.jsx';
import Login from './Login'
import Logout from './Logout'
import { Link } from 'react-router-dom';


export default function Nav({ isAuthenticated, handleSignOut}) {
    return (
        <div className="navigation">
            <nav>
                {/* Navbar content */}
                <ul>
                    <li className="noConnect"><Link to="/">Home</Link></li>
                    <li className="noConnect"><Link to="/leaderboard">Leaderboard</Link></li>
                    <li className="noConnect"><Link to="/graph">Graph</Link></li>
                    <li className="connectWearable">{<Button/>}</li>

                    {isAuthenticated ? 
                        <li className="connectWearable">{<Logout handleSignOut={handleSignOut}/>}</li>
                        :
                        <li className="connectWearable">{<Login/>}</li>
                    }
                </ul>
            </nav>
        </div>
    )
}
