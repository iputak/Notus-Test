import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import notusLogoFooter from '../images/Notus-logo-footer.svg';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-green'>
                <div className='footer-text'>
                    <p>© 2019. Notus IT d.o.o.</p>

                </div>
            </div>
            <div class='footer-logo'>
                <img src={notusLogoFooter}></img>
            </div>
        </div>
    );
}

export default Footer;