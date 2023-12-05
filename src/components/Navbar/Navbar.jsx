import React, { useState } from 'react'
import "./Navbar.css";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav id="desktop-nav">
                <div>
                    <a href="/" className="logo">
                        <img src="/logo.png" alt="Logo" style={{ width: '110px' }} />
                    </a>
                </div>
                <div>
                    <ul className="nav-links">
                        <li><a className="nav-link" href="#features">Features</a></li>
                        <li><a className="nav-link" href="#testimonials">Testimonials</a></li>
                        <li><a className="nav-link" href="#pricing">Pricing</a></li>
                        <li><a className="nav-link" href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="login-option">
                    <a className="login" href='#'>Login</a>
                    <a className="signup" href='#'>Signup</a>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div>
                    <a href="/" className="logo">
                        <img src="/logo.png" alt="Logo" style={{ width: '110px' }} />
                    </a>
                </div>
                <div className={`hamburger-menu`}>
                    <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
                        <li><a className="menu-link" href="#features" onClick={toggleMenu} >Features</a></li>
                        <li><a className="menu-link" href="#testimonials" onClick={toggleMenu} >Testimonials</a></li>
                        <li><a className="menu-link" href="#pricing" onClick={toggleMenu} >Pricing</a></li>
                        <li><a className="menu-link" href="#faq" onClick={toggleMenu} >FAQ</a></li>
                        <div className="login-option">
                            <a className="login" href='#'>Login</a>
                            <a className="signup" href='#'>Signup</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
