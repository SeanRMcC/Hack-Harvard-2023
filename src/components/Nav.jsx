import React from 'react';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navigation">
            <nav>
                {/* Navbar content */}
                <ul>
                    <li className="noConnect"><Link to="/">Home</Link></li>
                    <li className="noConnect"><Link to="/leaderboard">Leaderboard</Link></li>
                    <li className="noConnect"><Link to="/graph">Graph</Link></li>
                    <li className="connectWearable">{<Button/>}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav 