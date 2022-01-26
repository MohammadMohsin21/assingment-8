import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/home">Home</a>
                <a href="/service">Service</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;