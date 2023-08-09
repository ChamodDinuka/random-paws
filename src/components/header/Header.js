import React from 'react';
import './Header.css';

function Header() {
    return (
        <div class="header">
            <a class="logo">RandomPows</a>
            <div class="header-right">
                <a class="active" href="/">New Favourite</a>
                <a href="collection">My Collection</a>
            </div>
        </div>
    )
}

export default Header