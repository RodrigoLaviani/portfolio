import React from 'react';
import '../assets/styles/components/Footer.scss'
import Link from './Link';
import contacts from '../data/footer.json'
import { useSelector } from 'react-redux';

const Footer = () => {
    const arrow = useSelector((state) => state.state.arrowShow)


    return (
        <footer className="footer">
            <div className="footer-container">
            {arrow && <img className={`footer-arrow`} src={require('../assets/images/footer/arrow.png')} alt="arrow" width="60px"/>}
                {
                    (contacts || []).map(contact => <Link key={contact.id} icon={contact.icon} name={contact.name} url={contact.url}></Link>)
                }
            </div>
        </footer>
    );
};


export default Footer;