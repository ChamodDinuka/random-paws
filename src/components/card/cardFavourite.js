import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFavouriteImage } from '../../store/actions'
import './card.css'

function CardFavourite({imgUrl}) {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.randomImage.isloading)
    const removeFavourite = () => {
        deleteFavouriteImage(imgUrl)(dispatch)
    }

    return (
        <div className="card">
            {!isLoading ?
                <img src={imgUrl} className="card-img" alt="logo" />
                : "image is loading"}
            <div className="button-group">
                <button className="danger" onClick={() => removeFavourite()}>Remove Favourite</button>
            </div>
        </div>
    )
}

export default CardFavourite