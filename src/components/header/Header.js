import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
      }

    return (
        <div class="header">
            <a class="logo">RandomPows</a>
            <div class="header-right">
                <a class="active"  onClick={()=>handleClick('/')}>New Favourite</a>
                <a  onClick={()=>handleClick('collection')}>My Collection</a>
            </div>
        </div>
    )
}

export default Header