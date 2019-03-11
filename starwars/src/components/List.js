import React from 'react';

import Card from './Card';

import "./StarWars.css";

const List = props => {
    return (
        <div className="list">
            {props.characters.map(character => (
                <Card  key={character.name} character={character} />
            ))}
        </div>
    )
}

export default List;