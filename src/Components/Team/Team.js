import React, { useEffect, useState } from 'react';
import Data from '../../Data/data.json';
import Player from '../Player/Player';
import SelectedTeam from '../SelectedTeam/SelectedTeam';
import './Team.css';

const Team = () => {
    const [players, setPlayers] = useState([]);
    const [addedPlayers, setAddedPlayers] = useState([]);

    const handleAddProduct = (player)=>{
        const newPlayers = [...addedPlayers, player];
        setAddedPlayers(newPlayers);
    }

    useEffect(()=>{
        setPlayers(Data);
    }, [])

    return (
        <div className="team-container">
            <div className="player-container">
                    {
                        players.map(player => <Player handleAddProduct={handleAddProduct} player={player}></Player>)
                    }
            </div>

            <div className="selected-team-container">
            <div id="selected-team-wrapper" className="shadow p-4 rounded">
                    <h5 className="text-center">Selected Player: {addedPlayers.length}</h5>
                    <SelectedTeam addedPlayers={addedPlayers}></SelectedTeam>     
            </div>
            </div>
        </div>
    );
};

export default Team;