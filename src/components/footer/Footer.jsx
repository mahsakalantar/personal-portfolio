import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Mahsa</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li>
                    <a href="#" className="footer__link">About</a>
                </li>
            </ul>
            <div className="footer__social ">
            <a href="https://github.com/mahsakalantar" className="footer-social-link">
        <i class="uil uil-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mahsa-kalantar-724978233" className="footer-social-link">
        <i class="uil uil-linkedin"></i>
        </a>
        <a href="" className="footer-social-link">
        <i class="bx bxl-facebook"></i>
        </a> 
            </div>
            <span className="footer__copy">
                 Mahsa.  All rights reserved
            </span>
        </div>
        </footer>
  )
}

export default Footer