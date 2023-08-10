import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRandomImage, addFavouriteImage, setAlert } from '../../store/actions'
import './card.css'

function Card() {
    const dispatch = useDispatch();
    const imageUrl = useSelector((state) => state.randomImage.data);
    const imageList = useSelector((state) => state.imageList.data)
    const isLoading = useSelector((state) => state.randomImage.isloading);

    useEffect(() => {
        getRandomImage()(dispatch);
    }, [])

    const refresh = () => {
        getRandomImage()(dispatch);
    }

    const addFavourite = () => {
        addFavouriteImage(imageUrl)(dispatch);
        setAlert('Successfully Added',true)(dispatch);
        setTimeout(() => {
            setAlert('',false)(dispatch);
          }, 3000);
    }

    return (
        <div className="card">
            {!isLoading ?
                <img src={imageUrl} className="card-img" alt="logo" />
                : "image is loading..."}
            <div className="button-group">
                <button className="secondary" onClick={() => refresh()}>New Image</button>
                <button className="primary" onClick={() => addFavourite()} disabled={imageList.includes(imageUrl)}>+ Add Favourite</button>
            </div>
        </div>
    )
}

export default Card