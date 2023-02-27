import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
const Home=()=>{
    return (
        <div className='container'>
            <h1>hello</h1>
            <div className="header">
                <Link to='/' >HOME</Link>
                <Link to='/about' >ABOUT</Link>
                <Link to='/contact' >CONTACT</Link>
                <Link to='/login' >LOGOUT</Link>
            </div>

        </div>
    )
}


export default Home;