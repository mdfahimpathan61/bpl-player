import React from 'react';

import deleteImg from '../../../src/assets/Frame.png'

const SelectedPlayer = ({selectedPlayer}) => {
    return (
        
            <div className="border rounded-lg p-4 my-5 flex justify-between items-center">
                <div className='flex gap-10'>
                    <div>
                        <img className='h-15 w-15' src={selectedPlayer.img} alt="" />

                    </div>

                    <div>
                        <h2 className='font-bold text-lg'>{selectedPlayer.name}</h2>
                        <p className='text-gray-400'>{selectedPlayer.capability}</p>
                    </div>
                </div>


                <div>
                    <img src={deleteImg} alt="" />
                </div>



            </div>
            
       
    );
};

export default SelectedPlayer;