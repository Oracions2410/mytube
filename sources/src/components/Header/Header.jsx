import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <header className="header">
        <nav className="nav">
            <div className="brand">

                <Link to="/">
                    <img src="./images/logo.png" alt="Logo" className="logo-img" />
                </Link>

            </div>
            <div className="searchbar">
                <input className="searchbar-input" type="text" placeholder="Rechercher une vidéo..." />
                <div className="search-icon">
                    <img src="./images/search-icon.png" alt="search-icon" />
                </div>
            </div>
        </nav>
    </header>
}

export default Header