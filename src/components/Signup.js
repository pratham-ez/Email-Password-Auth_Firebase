import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase';

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const handleSubmission = () => {
        // console.log(values);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: values.name
                })
                console.log(user);
                // ...
            })
            .catch((error) => {
                console.log(error);
                // ..
            });

    }



    return (
        <div>
            <h1>Login</h1>
            <br />
            <label htmlFor="Name"></label>
            <input type="text"
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                placeholder='enter your name' />
            <br />
            <label htmlFor="Email"></label>
            <input type="text"
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                placeholder='enter your email' />
            <br />
            <label htmlFor="Password"></label>
            <input type="text"
                onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
                placeholder='enter your password' />
            <br />
            <button onClick={handleSubmission}>Signup</button>
        </div>
    )
}

export default Signup