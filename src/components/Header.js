import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__menu">
                <div>Contacto</div>
                <div className="header__menu--language">
                    <p>Idioma</p>
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