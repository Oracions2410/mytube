import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ searchQuery }) => {

    const [searchTerms, setSearchTerms] = useState('')

    const handleChange = (e) => setSearchTerms(e.target.value)

    const handleSubmit = (e) => {
        if (searchTerms)
            searchQuery(searchTerms)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            handleSubmit()
    }

    return <header className="header">
        <nav className="nav">
            <div className="brand">

                <Link to="/">
                    <img src="./images/logo.png" alt="Logo" className="logo-img" />
                </Link>

            </div>
            <div className="searchbar">
                <input onChange={handleChange} onKeyPress={handleKeyPress} className="searchbar-input" type="text" placeholder="Rechercher une vidéo..." />
                <div onClick={handleSubmit} className="search-icon">
                    <img src="./images/search-icon.png" alt="search-icon" />
                </div>
            </div>
        </nav>
    </header>
}

export default Header