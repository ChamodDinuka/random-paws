import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getRandomImage } from '../../store/actions'
import './card.css'

function Card() {
    const dispatch = useDispatch();
    useEffect(() => {
        getRandomImage()(dispatch)
    }, [])
    const image = useSelector((state) => state.randomImage.data)

    const url = 'https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg'
    return (
        <div className="card">
            <img src={url} className="card-img" alt="logo" />
            <div className="button-group">
                <button className="secondary">New Image</button>
                <button className="primary">+ Add Favourite</button>
            </div>
        </div>
    )
}

export default Card