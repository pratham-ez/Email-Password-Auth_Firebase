import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <h1>
                <Link to="/login">Login</Link>
            </h1>
            <br />
            <h1>
                <Link to="/signup">Signup</Link>
            </h1>
            <br />

            <h1>{props.name ? `welcome ${props.name}` : "login please"}</h1>
        </div>
    )
}

export default Home