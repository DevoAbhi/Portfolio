import {React, useState} from 'react'
import './Navbar.css'

const Navbar = () => {

    const [showHamburger, setShowHamburger] = useState(false);

    const hamburgerHandler = () => {
        setShowHamburger(!showHamburger);
    }

    return (
        <nav className="navbar-container">
            {/* <div className="navbar-brand">Abhinab Roy</div> */}

            <div className={`nav-links ${showHamburger ? "active": ""}`}>
                <a className={`nav-item ${showHamburger ? "active": ""}`} href='#home' onClick={hamburgerHandler}>Home</a>
                <a className={`nav-item ${showHamburger ? "active": ""}`} href='#projects' onClick={hamburgerHandler}>Projects</a>
                <a className={`nav-item ${showHamburger ? "active": ""}`} href='#experience' onClick={hamburgerHandler}>Experience</a>
                <a className={`nav-item ${showHamburger ? "active": ""}`} href='#contactme' onClick={hamburgerHandler}>Contact me</a>
            </div>

            <div className="hamburger" onClick={hamburgerHandler}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
    )
}

export default Navbar