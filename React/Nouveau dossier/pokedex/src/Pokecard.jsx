import React from 'react';

const Pokekard = ({id, name, type, exp}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src="" alt="" srcset="" />
            <p>{type}</p>
            <p>{exp}</p>
        </div>
    );
}

export default Pokekard;
