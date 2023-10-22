
import React from 'react'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { usersCollection } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'


export default function Login() {

    // function to signInWithGoogle (using Firebase authentication)
    const signInWithGoogle = async () => {

		// initialize provider
		const provider = new GoogleAuthProvider()

        try {
            // signin with firebase, and store result
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            console.log(user)
            // check if user document exists
            const userDocRef = doc(usersCollection, user.uid)
            const userDocSnapshot = await getDoc(userDocRef)

            // if document doesn't exist, create it
            if (!userDocSnapshot.exists()) {
                await setDoc(userDocRef, {
                    name: user.displayName,
                    ids: [],
                    last_resting_hr: null,
                    score: -1,
                })
            }

            console.log('User authenticated:', result.user)
        } catch (error) {
            console.error('Error signing in:', error)
        }
      }


    
    return (
        <div className='login'>
            <button 
                className='google-btn'
                onClick={signInWithGoogle}
            >
                Sign In With Google
            </button>
        </div>
    )
}