import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home'
import Details from './Pages/Details'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [stocksArray, setStocksArray] = useState([])
  useEffect(()=> {
    const options = {
      method: 'GET',
      url: 'https://twelve-data1.p.rapidapi.com/stocks',
      params: {
        exchange: 'NASDAQ',
        format: 'json'
      },
      headers: {
        'X-RapidAPI-Key': '0075b31c77mshf0b1d85f1f0dafcp103c22jsnc4ab63a6aec3',
        'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
      }
    };
      axios(options).then((res)=> {
        let allStocks = res.data.data
        // array of 4000 objects. 

        // Tony - make a new array of just the first 100
       

       let first100 = allStocks.slice(0, 10)

       const newArray1 = first100.map((stock) => stock.name)
       setStocksArray(first100)
       console.log(newArray1)

       console.log(first100)

      })
    
  }, [])
     
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home    />} />
          <Route path="/Details" element={<Details     />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
