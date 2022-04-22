import React from 'react';
import Pokecards from './Pokecards';
import "./App.css";

const Pokegame = () => {
    return (
        <div className="grid">
            <Pokecards name="mahdi" img="" type="human" exp="20" />
            <Pokecards name="mahdi" img="" type="human" exp="20" />
            <Pokecards name="mahdi" img="" type="human" exp="20" />
        </div>
    );
}

export default Pokegame;
