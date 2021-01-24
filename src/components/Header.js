import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import text from '../data/header.json'
import '../assets/styles/components/Header.scss'

const Header = () => {
    const [ languageSp, setLanguageSp ] = useState(false)
    const dispatch = useDispatch();
    const isSpanish = useSelector(state => state.state.isSpanish)

    useEffect(() => {
        setLanguageSp(isSpanish)
    }, [isSpanish])

    const handlerShowLinks = () => {
        dispatch({ type: 'arrow', payload: true })
        setTimeout(() => {
            dispatch({ type: 'arrow', payload: false })
        }, 5000)
    }

    const handlerChangeLanguage = (isSpanish) => {
        dispatch({ type: 'change_language', payload: isSpanish})
    }

    const textTemplate = () => {
        return languageSp ? text[1] : text[0]
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