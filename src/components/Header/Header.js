import React from 'react'
import {ReactComponent as Logo} from './crown.svg';
import {Link} from 'react-router-dom';
import './header.styles.scss';

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}