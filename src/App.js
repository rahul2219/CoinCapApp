
import { useEffect, useState } from 'react';
import './App.css';
import { Currencies } from './Currencies';

function App(){

  const [coins,setCoins] = useState([]);
  const [count,setCount] = useState(50);
  const[load,setLoad] = useState(true);
  const [clicked,setClicked] = useState(false);
 
  useEffect(()=>{
    fetchApi();

  },[])

  const fetchApi = async()=>{
    const url = `https://api.coincap.io/v2/assets`
    const response = await fetch(url);
    if(response.status === 200){
      const data = await response.json();
      setCoins(data.data);
      setLoad(false);
      // console.log(data.data);
    }
  }

  const showMore = ()=>{
    setCount(count+50);
  }
  const showLess = ()=>{
    setCount(count-50);
  }
  const handleClick=()=>{
    setClicked(true);
  }
  console.log('render')
  return (
    <div className="App" >
      <div className='header'>
        <div className='header-div'>
          <div className='types position'>
            <span>Coins</span>
            <span>Exchanges</span>
            <span>Swap</span>
          </div>
          <div className='coincap position'>
            <img src="https://play-lh.googleusercontent.com/KA6ojZ7PW4R7_5V46d2Q0KKh1AebENk56IPk46uhOBxSECHgOlnlV24k1WCubwZUxmM" alt=""/>
          </div>
          <div className='icons position'>
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt=""/>
            {clicked ? <input type="text"/> : <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" onClick={handleClick} alt=""/>}
          </div>
          <div className='button position'>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
      <div className='marketValInfo'>
        <div className='marketVal'>
          {load === false &&
          <div className='marketDetails'>
            <div className='marketCap colflex'><span>MARKETCAP</span><span>$1.78T</span></div>
            <div className='marketCap colflex'><span>EXCHANGE VOL</span><span>$68.97B</span></div>
            <div className='marketCap colflex'><span>ASSETS</span><span>2,295</span></div>
            <div className='marketCap colflex'><span>EXCHANGES</span><span>73</span></div>
            <div className='marketCap colflex'><span>MARKETS</span><span>15,799</span></div>
            <div className='marketCap colflex'><span>BTC DOM INDEX</span><span>33.9%</span></div>
          </div>
          }
          {load? <div className='fetching'><span>Fetching data...</span></div>:
          
          <div className='coinList'>
            <div className='head'>
              <span className='rank'>Rank</span>
              <span className='name'>Name</span>
              <span className='price'>Price</span>
              <span className='marketcap'>MarketCap</span>
              <span className='vpwar'>VWAP(24HR)</span>
              <span className='supply'>Supply</span>
              <span className='volume'>Volume(24Hr)</span>
              <span className='change'>Change(24Hr)</span>
            </div>
            
            {coins.slice(0,count).map((coin)=>(
              <Currencies coin={coin}/>
            ))}
          </div>}
          {count < 100 ?
          <div className='buttonDiv'>
            <button className='showButton' onClick={showMore}>View More</button>
          </div> : <div className='buttonDiv'>
            <button className='showButton' onClick={showLess}>View Less</button>
          </div>}
          </div>
        </div>
      
    </div>
  );
}

export default App;
