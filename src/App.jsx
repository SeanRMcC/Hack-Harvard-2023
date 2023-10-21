import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login'
import Parse from "./functions/Parse"
import './styles.css';

// Firebase imports
import { usersCollection } from './firebase'
import { addDoc, getDocs, updateDoc, onSnapshot, collection } from 'firebase/firestore'
import { auth } from "./firebase"


function App() {
    // check if user is authenticated (decides what page to render)
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    const user = auth.currentUser


    Parse()
    return ( 
        <div>
            <Nav />
            <Footer />
            {isAuthenticated || <Login />}
        </div>
    );
}

export default App;