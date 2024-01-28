import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
    return (
        <footer>
          <div className="container">
            <div className="footerContainer">
              <div className="footerLogo">
                <Link to="/">
                  <img src="/images/gifs/logo2.png" alt="Logo" />
                </Link>
              </div>
              <div className="footerNav">
                <p><HashLink to="/#about">About me</HashLink></p>
                <p><HashLink to="/#services">services</HashLink></p>
                <p><Link to="/portfolio">Portfolio</Link></p>
                <p><HashLink to="/#contact">contact me</HashLink></p>
              </div>
              <div className="footerMedias">
                <div className="footerMedia">
                  <Link to="https://www.linkedin.com/in/alexander-sakaly" target="_blank"
                    ><i className="fab fa-linkedin-in"></i
                  ></Link>
                </div>
                <div className="footerMedia">
                  <Link to="https://github.com/ecoaurum" target="_blank"
                    ><i className="fab fa-github-alt"></i
                  ></Link>
                </div>
                <div className="footerMedia">
                  <Link to="https://t.me/ecoaurum" target="_blank"
                    ><i className="fab fa-telegram"></i
                  ></Link>
                </div>  
                <div className="footerMedia">
                  <Link to="https://www.facebook.com/aleksandr.ecoaurum" target="_blank"
                    ><i className="fab fa-facebook-f"></i
                  ></Link>
                </div>
                <div className="footerMedia">
                  <Link to="https://www.instagram.com/aleksander_sql" target="_blank"
                    ><i className="fab fa-instagram"></i
                  ></Link>
                </div>                              
              </div>
              <span>Copyright ©{currentYear} All rights reserved</span>
            </div>
          </div>
        </footer>
    )
};