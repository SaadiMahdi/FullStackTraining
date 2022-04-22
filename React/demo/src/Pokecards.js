import React from 'react';



const Pokecards = ({name,img,type,exp}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={img}/>
            <p>type : {type}</p>
            <p> Exp : {exp}</p>
        </div>
    );
}

export default Pokecards;
