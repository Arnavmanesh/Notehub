import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <a href="#" className="logo"><span>Notes</span>Hub</a>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#subjects">Subjects</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
