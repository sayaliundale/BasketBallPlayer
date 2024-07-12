import React from 'react'
import "../BasketballPlayerCard/BasketballPlayerCard.css";

const BasketballPlayerCard = ({ name, image, position, stats, img }) => {
    return (
        <div className="card">
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
                <p>Name : {name}</p>
                <p>Position : {position}</p>
                <p>Stats :</p>
                <ul>
                    <li>Points per Game :{stats.pointsPerGame}</li>
                    <li>Assists per Game : {stats.assistsPerGame}</li>
                    <li>Rebounds per Game : {stats.reboundsPerGame}</li>
                </ul>
                
            </div>

        </div>
    )
}

export default BasketballPlayerCard