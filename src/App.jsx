
import { Suspense, useState } from 'react'
import './App.css'
import Available from './Component/Available/Available'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import Players from './Component/Players/Players'
import Selected from './Component/Selected/Selected'
import Footer from './Component/Footer/Footer'


const dataPromise = async () =>{
    const fetchData =await fetch('./players.json')
    const res = fetchData.json()
    return res
  }

function App() {

  

  const [coins,setCoins] = useState(0);
  const coinsHandler = () =>{
    setCoins(coins+10);
  }

  const [available,setAvailable] = useState(true)
  //console.log(available);
  

  const [countSelected, setCountSelected] = useState(0);


  const [selectedPlayers,setSelectedPlayers] = useState([])


  const [btn,setbtn]= useState(true);


  function btnHandler(boolValue){
        setbtn(boolValue);
        setAvailable(boolValue);
       // console.log(boolValue)
    }

  return (
    <>

    <div className='bg-white min-h-screen text-gray-900'>
      <div className="max-w-5xl mx-auto ">
          <Navbar coins={coins}></Navbar>
          <Banner coinsHandler={coinsHandler}></Banner>
          <Available btnHandler={btnHandler} countSelected={countSelected} btn={btn}></Available>
          {
            available ? <Suspense fallback={<h2 className='text-red-500'>Player data is loading.....</h2>}>
              <Players setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} setCountSelected={setCountSelected} countSelected={countSelected}   coins={coins} setCoins={setCoins} dataPromise={dataPromise()}></Players>
          </Suspense> : <Selected btnHandler={btnHandler} setCountSelected={setCountSelected} countSelected={countSelected}  setSelectedPlayers={setSelectedPlayers} selectedPlayers={btnHandler,selectedPlayers} ></Selected>
          }

          <Footer></Footer>
          
      </div>
      
    
    </div>
    

      

    </>
  )
}

export default App
