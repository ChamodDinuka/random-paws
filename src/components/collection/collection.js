import React from 'react'
import Card from '../card/card'
import './collection.css'

function collection() {
    let links = [
        "https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg",
        "https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg",
        "https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg",
        "https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg",
        "https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg",
        "https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg",
        "https://random.dog/6f6ea89d-5144-49c8-8f2a-12ba7798b8bf.jpg"
    ];
    return (
        <div className="card-group">
            {links.map(data => (
                <div className="card-list">
                    <Card />
                </div>
            ))}
        </div>
    )
}

export default collection