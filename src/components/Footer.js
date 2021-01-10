import React, { useEffect, useState } from 'react';
import '../assets/styles/components/Footer.scss'
import Link from './Link';
import contacts from '../data/footer.json'

const Footer = () => {
    const [arrow, setArrow] = useState('')

    useEffect(() => {

    }, [arrow])


    return (
        <footer className="footer">
            <div className="footer-container">
            <img className={`footer-arrow ${arrow}`} src={require('../assets/images/footer/arrow.png')} alt="arrow" width="60px"/>
                {
                    (contacts || []).map(contact => <Link key={contact.id} icon={contact.icon} name={contact.name} url={contact.url}></Link>)
                }
            </div>
        </footer>
    );
};


export default Footer;