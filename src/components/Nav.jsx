import React from 'react';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navigation">
            <nav>
                {/* Navbar content */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/graph">Graph</Link></li>
                    <li>{<Button />}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav 