
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const handleSubmission = () => {

        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then((userCredential) => {
                // Signed in 

                console.log("login successful");

                // ...
            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div>
            <h1>Login</h1>
            <br />
            <label htmlFor="Email"></label>
            <input type="Email"
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                placeholder='enter your email' />
            <br />
            <label htmlFor="Password"></label>
            <input type="text"
                onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
                placeholder='enter your password' />
            <br />
            <button onClick={handleSubmission}>Login</button>
        </div>
    )
}

export default Login