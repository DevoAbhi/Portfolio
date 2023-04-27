import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar-container">
            {/* <div className="navbar-brand">Abhinab Roy</div> */}

            <div className="nav-links">
                <a className="nav-item" href='#home'>Home</a>
                <a className="nav-item" href='#projects'>Projects</a>
                <a className="nav-item" href='#experience'>Experience</a>
                <a className="nav-item" href='#contactme'>Contact me</a>
            </div>
        </nav>
    )
}

export default Navbar