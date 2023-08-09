import React from 'react'
import CardFavourite from '../card/cardFavourite'
import { useSelector } from 'react-redux'
import './collection.css'

function Collection() {
    const imageList = useSelector((state) => state.imageList.data)
    
    return (
        <div className="card-group">
            {imageList && imageList.map(data => (
                <div className="card-list">
                    <CardFavourite imgUrl={data}/>
                </div>
            ))}
        </div>
    )
}

export default Collection