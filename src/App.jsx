import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login'
import './styles.css';

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
        <div>
            <Nav />
            {isAuthenticated || <Login />}
            {data === "" ? <img src={loading} alt="loading" /> : 
            <div>
                {data}
            </div>}
            <Footer />
        </div>
    );
    }

export default App;