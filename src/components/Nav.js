import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navigation">
            <nav>
                {/* Navigation bar content */}
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav