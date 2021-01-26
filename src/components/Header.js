import React from 'react'
import { useDispatch } from 'react-redux'
import useLanguage from './../shared/customHooks/useLanguage'
import text from '../data/header.json'
import '../assets/styles/components/Header.scss'

const Header = () => {
    const { language, handlerChangeLanguage } = useLanguage()
    const dispatch = useDispatch()

    const handlerShowLinks = () => {
        dispatch({ type: 'arrow', payload: true })
        setTimeout(() => {
            dispatch({ type: 'arrow', payload: false })
        }, 5000)
    }

    const textTemplate = () => {
        return language ? text[1] : text[0]
    }

    return (
        <header className="header">
            <div className="header__menu">
                <span onClick={() => handlerShowLinks()}>{textTemplate().aboutMe}</span>
                <div className="header__menu--language">
                    <span>{textTemplate().language.title}</span>
                    <ul>
                        <li><span className='option' onClick={() => handlerChangeLanguage(false)}>{textTemplate().language.english}</span></li>
                        <li><span className='option' onClick={() => handlerChangeLanguage(true)}>{textTemplate().language.spanish}</span></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;