
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

import '../styles/Header.css'

function Header() {

    const [searchTerm, setSearchTerm] = useState('')

    const onSearchHandler = e => {
        if (searchTerm === '') {
            e.preventDefault()
        }
    }

    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img 
                        className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"                 
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="header__search">
                <input 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search" 
                    type="text">
                </input>
                <Link 
                    onClick={onSearchHandler} 
                    className="search_btn_link" 
                    to={`/search/${searchTerm}`}
                >
                    <SearchIcon className="search_btn" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationIcon className="header_icon" />
                <Avatar 
                    alt="profile picture"
                    className="header__avatar"
                    src="https://miro.medium.com/fit/c/128/128/2*P2Po6oWVEM8Uyu2pA1wiJQ.jpeg"
                />
            </div>
        </div>
    )
}

export default Header
