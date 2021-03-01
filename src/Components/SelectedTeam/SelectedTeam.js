import React from 'react';
import './SelectedTeam.css'
const SelectedTeam = (props) => {
    const addPlayer = props.addedPlayers;
    const totalExpense = addPlayer.reduce((total, player)=> total + player.salary, 0)

    return (
        <div>
            <table class="table table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addPlayer.map((addedPlayer) =><tr><td>{addedPlayer.name}</td><td>${addedPlayer.salary}</td></tr>)            
                    }
                        <tr class="expense-text">
                            <td>Total Expense:</td>
                            <td>${totalExpense}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SelectedTeam;