import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu">
                <span>Contacto</span>
                <div className="header__menu--language">
                    <span>Idioma</span>
                    <ul>
                        <li><a href="/">Inglés</a></li>
                        <li><a href="/">Español</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;