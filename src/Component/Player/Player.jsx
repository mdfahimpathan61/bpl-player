import React, { useState } from 'react';
import userImg from '../../assets/user-name.png'
import flag from '../../assets/flag.png'


const Player = ({coins, setCoins, playerData}) => {
    //console.log(playerData)
    const { img, name, country, capability, batting_type, ball_type, price } = playerData

    const [chooseBtn, setChooseBtn] = useState(false);
    // console.log(chooseBtn);
    // console.log(typeof coins)
    // console.log(typeof price)
    //const parseCoin = parseInt(coins);
    

    return (
        <div className='p-5 rounded-lg shadow-lg m-2'>
            <div >
                <img className='rounded-lg w-xs h-[250px] ' src={img} alt="" />
            </div>
            <div className='flex items-center gap-2 my-2'>
                <img className='w-[26px]' src={userImg} alt="" />
                <h3 className='font-bold text-xl'>Name : {name}</h3>
            </div>

            <div className='flex items-center mt-3 justify-between'> 
                <div className='flex items-center  gap-2 '>
                    <img className='w-[16px] ' src={flag} alt="" />
                    <p className='text-gray-500'>{country}</p>
                </div>

                <h3 className='bg-gray-100 text-gray-700 rounded-sm p-2'>{capability}</h3>

            </div>
            <hr className='border-t-1 border-gray-200 my-2' />

            <h3 className='font-bold'>Rating</h3>

            <div className='flex justify-between my-3'>
                <h4 className='font-semibold'>{batting_type}</h4>
                <h4 className='font-semibold'>{ball_type}</h4>

            </div>

            <div className='flex items-center justify-between'>
                <h3 className='font-bold'>Price : $<span>{price}</span></h3>
                <button onClick={() => {
                    console.log( coins)
                    console.log( price)
                    console.log(coins >= price)
                    if (coins >= price) {
                        setChooseBtn(!chooseBtn);
                        setCoins(coins - price);
                    }
                    else {
                        alert("Insufficient Balance!...")
                    }
                }

                }
                    disabled={chooseBtn} className={` btn  btn-ghost bg-gray-100 text-black hover:bg-[#E7FE29] border ${chooseBtn ? "" : "border-[#E7FE29]"} rounded-lg`}>{chooseBtn ? "Selected" : "Choose Player"}</button>
            </div>
        </div>
    );
};

export default Player;