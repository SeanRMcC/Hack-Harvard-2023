import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login'
import Home from './components/Home'
import Leaderboard from './components/Leaderboard'
import Graph from './components/Graph'
import './styles.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

// Firebase imports
import { usersCollection } from './firebase'
import { addDoc, getDocs, updateDoc, onSnapshot, collection } from 'firebase/firestore'
import { auth } from "./firebase"
import Parse from './functions/Parse.js'
import loading from './images/loading.gif';
import { useEffect, useState } from 'react';

function App() {
    // check if user is authenticated (decides what page to render)
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    const user = auth.currentUser


  const [data, setData] = useState("");

    return ( 
        <Router>

            <div>
                <Nav />
                {isAuthenticated || <Login />}
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/leaderboard' element={<Leaderboard />} />
                        <Route path='/graph' element={<Graph />} />
                    </Routes>

                </div>
                {/* {data === "" ? <img src={loading} alt="loading" /> : 
                <div>
                    {data}
                </div>} */}
                <Footer />
            </div>
        </Router>
    );
    }

export default App;