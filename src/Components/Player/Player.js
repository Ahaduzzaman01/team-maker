import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const {image, name, salary, age, team} = props.player;
    return (
        <div id="custom-row" className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div id="custom-card-style" className="card h-100 shadow">
                        <div className="image-box">
                            <img src={image} className="card-img-top" alt="..."/>
                        </div>
                    <div className="card-body ">
                        <h4 className="card-title">{name}</h4>
                        <h6 className="card-title played-text"><span>He played at:</span> {team}</h6>
                        <p className="card-text">Salary: ${salary}</p>
                        <p className="card-text">Age: {age}</p>
                    </div>
                    <div>
                        <button onClick={()=> props.handleAddProduct(props.player)} className="btn btn-success shadow"><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;