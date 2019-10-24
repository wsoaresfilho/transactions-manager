import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <a href='/'>
                    <img className='header__logo' alt='Logo' src='logo.svg' />
                </a>
            </div>
        </header>
    );
};

export default Header;
