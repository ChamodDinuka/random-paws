import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavouriteImage, setAlert } from '../../store/actions'
import './card.css'

function CardFavourite({ imgUrl }) {
    const dispatch = useDispatch();
    const removeFavourite = () => {
        deleteFavouriteImage(imgUrl)(dispatch);
        setAlert('Successfully Removed',true)(dispatch);
        setTimeout(() => {
            setAlert('',false)(dispatch);
          }, 3000);
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