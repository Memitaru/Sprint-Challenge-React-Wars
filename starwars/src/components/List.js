import React from 'react';

import Card from './Card';

const List = props => {
    return (
        <div className="list">
            {props.characters.map(character => (
                <Card  key={character.name} characterDetails={character} />
            ))}
        </div>
    )
}

export default List;