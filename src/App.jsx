import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles.css';
import ParseAvgHeartRate from './functions/ParseAvgHeartRate.js'

function App() {

  ParseAvgHeartRate()
  return ( 
    <div>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;