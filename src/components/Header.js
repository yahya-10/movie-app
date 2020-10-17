import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {

    return (
        <div className="header">
            
            <h2 className="title">MovieBook</h2>
            <ul className="navbar">
            <Link className="home" to = '/' >
                {/* <li className="home"><a href="#">Home</a></li> */}Home
            </Link>
                <li><a href="#">News</a></li>
                <li><a href="#">Box Office</a></li>
                <li><a href="#">Subscribe</a></li>
            </ul>
    </div>
    )
}

export default Header

