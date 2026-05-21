import React from 'react';
import navImg from '../../assets/logo.png'
import coin from '../../assets/coin.png'

const Navbar = ({ coins }) => {
    return (

        <div className="navbar  ">
            <div className="flex-1">
                <img src={navImg} alt="logo" />
            </div>

            <div >
                <h3 className='font-bold flex gap-1 border border-gray-200 rounded-md p-3'> <span>{coins}</span> Coin <span><img src={coin} alt="" /></span></h3>
            </div>

        </div>


    );
};

export default Navbar;