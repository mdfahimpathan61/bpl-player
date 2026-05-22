import React, { useState } from 'react';

const Available = ({setAvailable,countSelected}) => {
    const [btn,setbtn]= useState(true);

    function btnHandler(boolValue){
        setbtn(boolValue);
        setAvailable(boolValue);
       // console.log(boolValue)
    }
    

   

    return (
        <div className='flex justify-between my-5 items-center font-bold'>
            <div >
                <h2>Available Players</h2>
            </div>

            <div className='font-bold'>
                <button onClick={() =>btnHandler(true)} className={`border-none rounded-l-xl rounded-r-none btn ${btn?"bg-[#E7FE29]":"bg-white"} text-black`}>Available</button>
                <button onClick={() => btnHandler(false)} className={`border-none rounded-r-xl rounded-l-none btn  text-black ${btn?"bg-white":"bg-[#E7FE29]"}`}>Selected (<span>{countSelected}</span>)</button>
            </div>
        </div>
    );
};

export default Available;