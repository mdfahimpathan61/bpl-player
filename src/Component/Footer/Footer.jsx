import React from 'react';
import bgimg from '../../assets/bg-shadow.png'


const Footer = () => {
    return (
        <div className="max-w-5xl mx-auto mt-30 relative ">

            {/* Black Background */}
            <div className="bg-black h-48  mt-20"></div>

            {/* Floating Card */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full px-10">

                <div className="relative h-48 rounded-xl overflow-hidden bg-white">

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center "
                        style={{ backgroundImage: `url(${bgimg})` }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center h-full">

                        <div className="text-center space-y-3">

                            <h1 className="font-bold text-xl text-black">
                                Subscribe to our Newsletter
                            </h1>

                            <p className="text-gray-400">
                                Get the latest updates and news right in your inbox!
                            </p>



                            <div className='flex justify-center'>
                                <label >

                                    <input type="email" placeholder="mail@site.com" required />
                                </label>

                                <button className='btn btn-soft btn-secondary'>Subscribe</button>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
           



        </div>
    );
};

export default Footer;