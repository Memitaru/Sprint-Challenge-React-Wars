import React from 'react';
import './card.css';

const Card = props => {
    return (
        <div className="card">
        <h2>
            {props.character.name}
        </h2>
        <div className="profile">
        <div className="info">
            <p>Birth Year: {props.character.birth_year}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Eye Color: {props.character.eye_color}</p>
        </div>
        <div className="info">
        <p>Gender: {props.character.gender}</p>
        <p>Height: {props.character.height}</p>
        <p>Mass: {props.character.mass}</p>
        </div>
        </div>
        </div>
    )
}

export default Card;