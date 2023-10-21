import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles.css';
import Parse from './functions/Parse.js'

function App() {

  Parse()
  return ( 
    <div>
      <Nav />
      <Footer />
    </div>
  );
}

export default App;