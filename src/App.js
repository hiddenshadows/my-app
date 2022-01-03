import './App.css';

import React from 'react';
import ReactDOM from 'react-dom'

import Header from "./Header"
import MyInfo from "./MyInfo"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header />
      <MyInfo />
      <Footer />
    </div>
  );
}

// capital makes it a JSX element
// lowercase is a normal JS function


// only one default per file
export default App;
