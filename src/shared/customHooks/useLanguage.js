import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useLanguage = () => {
    const [ language, setLanguage ] = useState(false)
    const dispatch = useDispatch()
    const isSpanish = useSelector(state => state.state.isSpanish)

    useEffect(() => {
        setLanguage(isSpanish)
    }, [isSpanish])

    const handlerChangeLanguage = (isSpanish) => {
        dispatch({ type: 'change_language', payload: isSpanish})
    }

    return { language, handlerChangeLanguage }
}

export default useLanguage