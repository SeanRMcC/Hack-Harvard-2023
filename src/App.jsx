import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles.css';
import ParseAvgHeartRate from './functions/ParseAvgHeartRate.js'
import loading from './loading.gif';

import { useEffect, useState } from 'react';
function App() {

  ParseAvgHeartRate()
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/webhook",
    {
      mode: "cors",
      headers: {
        accept: "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        "origin": "*",
        "content-type": "application/json",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
      }
    }
    )
    .then(res => res.json())
    .then(res => setData(JSON.stringify(res)));
  });
  return ( 
    <div>
      <Nav />
      {data === "" ? <img src={loading} alt="loading" /> : 
      <div>
        {data}
      </div>}
      <Footer />
    </div>
  );
}

export default App;