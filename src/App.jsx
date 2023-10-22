import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
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
    const [userDocRef, setUserDocRef] = React.useState(null)
    const user = auth.currentUser

    console.log(userDocRef)

    React.useEffect(() => {
        // firebase function (check if authentication changes...)
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(user !== null) // update isAuthenticated based on if user signed in
        })
        return unsubscribe
    }, [])


    // function to sign out (with firebase authentication)
    const handleSignOut = async () => {
        try {
            // additionally, sign out with FIREBASE
            await auth.signOut()
            console.log("Successfully signed out")
        } catch (error) {
            console.log("Error signing out:", error)
        }
    }


    return ( 
        <Router>

            <div>
                <Nav 
                    isAuthenticated={isAuthenticated}
                    handleSignOut={handleSignOut}
                    setUserDocRef={setUserDocRef}
                />

                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home userDocRef={userDocRef} isAuthenticated={isAuthenticated} user={user} />} /> 
                        <Route path='/leaderboard' element={<Leaderboard user={user} />} />
                        <Route path='/graph' element={<Graph />} />
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
    }

export default App;