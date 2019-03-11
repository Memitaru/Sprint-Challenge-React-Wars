import React from 'react';

const Species = props => {
    return(
        <div className="species">
        <p>Species: {props.species.name}</p>
        </div>
    )
}

export default Species;