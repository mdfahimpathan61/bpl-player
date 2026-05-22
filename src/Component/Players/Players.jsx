import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({setCountSelected,countSelected, coins, setCoins,dataPromise}) => {
const playersData = use(dataPromise)
console.log(playersData)
    return(
        <>
             <div  className='grid grid-cols-3'>
            {
               
            playersData.map( playerData => <Player setCountSelected={setCountSelected} countSelected={countSelected} coins={coins} setCoins={setCoins} playerData={playerData}></Player>)
                
        
            }
            </div>
         </>
    )
        
       
    
    
    
   
};

export default Players;