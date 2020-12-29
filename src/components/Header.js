import React from 'react'
import '../assets/styles/components/Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu">
                <div className="header__menu--profile">
                    <p>Idioma</p>
                </div>
                <ul>
                    <li><a href="/">Inglés</a></li>
                    <li><a href="/">Español</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;