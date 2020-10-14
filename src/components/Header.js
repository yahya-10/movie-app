import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {

    return (
        <div className="header">
            <h2 className="title">MovieBook</h2>
            <ul className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Box Office</a></li> 
            </ul>
    </div>
    )
}

export default Header

