import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRandomImage } from '../../store/actions'
import './card.css'

function Card() {
    const dispatch = useDispatch();
    const imageUrl = useSelector((state) => state.randomImage.data)
    const isLoading = useSelector((state) => state.randomImage.isloading)
    useEffect(() => {
        getRandomImage()(dispatch)
    }, [])
    const refresh = () => {
        getRandomImage()(dispatch)
    }
    return (
        <div className="card">
            {!isLoading ?
                <img src={imageUrl} className="card-img" alt="logo" />
                : "image is loading"}
            <div className="button-group">
                <button className="secondary" onClick={() => refresh()}>New Image</button>
                <button className="primary">+ Add Favourite</button>
            </div>
        </div>
    )
}

export default Card