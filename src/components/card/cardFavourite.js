import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavouriteImage } from '../../store/actions'
import './card.css'

function CardFavourite({ imgUrl }) {
    const dispatch = useDispatch();
    const removeFavourite = () => {
        deleteFavouriteImage(imgUrl)(dispatch)
    }

    return (
        <div className="card">
            <img src={imgUrl} className="card-img" alt="logo" />
            <div className="button-group">
                <button className="danger" onClick={() => removeFavourite()}>Remove Favourite</button>
            </div>
        </div>
    )
}

export default CardFavourite