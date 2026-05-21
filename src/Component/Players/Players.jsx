import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({dataPromise}) => {
const playersData = use(dataPromise)
console.log(playersData)
    return (
        <>
        <div className='grid grid-cols-3'>
            {
            playersData.map( playerData => <Player playerData={playerData}></Player>)
        }
        </div>
        </>
    );
};

export default Players;