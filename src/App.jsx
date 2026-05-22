
import { Suspense, useState } from 'react'
import './App.css'
import Available from './Component/Available/Available'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import Players from './Component/Players/Players'
import Selected from './Component/Selected/Selected'


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

  return (
    <>

    <div className='bg-white min-h-screen text-gray-900'>
      <div className="max-w-5xl mx-auto ">
          <Navbar coins={coins}></Navbar>
          <Banner coinsHandler={coinsHandler}></Banner>
          <Available countSelected={countSelected} setAvailable={ setAvailable}></Available>
          {
            available ? <Suspense fallback={<h2 className='text-red-500'>Player data is loading.....</h2>}>
              <Players setCountSelected={setCountSelected} countSelected={countSelected}   coins={coins} setCoins={setCoins} dataPromise={dataPromise()}></Players>
          </Suspense> : <Selected ></Selected>
          }
          
      </div>
      
    
    </div>
    

      

    </>
  )
}

export default App
