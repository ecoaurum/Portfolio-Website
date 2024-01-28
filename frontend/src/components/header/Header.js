import React from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header(props) {
    return (       
        <header className={`header-${props.bgColor || "black"}`}>
        <div className="container">        
            <div className="nav">
                <div className="nav1">
                    <Link to="/">
                    <img src="/images/gifs/logo2.png" alt="Logo" />
                    </Link>
                </div>
                <div className="nav2">
                    <div className="menu"><HashLink to="/#about">about Me</HashLink></div>
                    <div className="menu"><HashLink to="/#services">services</HashLink></div>
                    <div className="menu">
                    <Link to="/portfolio">Portifolio</Link>
                    </div>
                    <div className="menu"><HashLink to="/#contact">contact Me</HashLink></div>
                </div>          
            </div>
        </div>
    </header>
    );
};