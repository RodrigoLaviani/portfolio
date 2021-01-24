import React from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Header.scss'

const Header = () => {
    const dispatch = useDispatch();

    const handlerShowLinks = () => {
        dispatch({ type: 'arrow', payload: true })
        setTimeout(() => {
            dispatch({ type: 'arrow', payload: false })
        }, 5000)
    }

    return (
        <header className="header">
            <div className="header__menu">
                <span onClick={() => handlerShowLinks()}>Contacto</span>
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