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
                <a  onClick={()=>handleClick('/')} tabIndex={'1'}>New Favourite</a>
                <a  onClick={()=>handleClick('collection')} tabIndex={'2'}>My Collection</a>
            </div>
        </div>
    )
}

export default Header