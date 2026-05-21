import bgimg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png'

export default function Banner( {coinsHandler}) {
    return (
        <div className="max-w-5xl mx-auto mt-5">

            <div className="relative h-96 rounded-xl overflow-hidden bg-black">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgimg})` }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center space-y-3">

                        <img src={bannerImg} alt="" className="w-40 mx-auto" />

                        <h1 className="font-bold text-2xl mt-4 text-white">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h1>
                        <p className='text-gray-100 mt-4 font-medium'>Beyond Boundaries Beyond Limits</p>


                        
                            <button onClick={() => coinsHandler()} className="btn bg-[#E7FE29] text-black rounded-xl outline outline-[#E7FE29] outline-offset-4 hover:shadow-[0_0_15px_rgba(231,254,41,0.7)] hover:font-bold">
                                Clam Free Coin
                            </button>
                        


                    </div>
                </div>

            </div>

        </div>
    )
}