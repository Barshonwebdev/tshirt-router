import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/boss">Boss</Link>
        </nav>
    );
};

export default Header;