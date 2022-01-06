import './App.css';

import React from 'react';
//import ReactDOM from 'react-dom'

import Header from "./Header"
import MyInfo from "./MyInfo"
import Footer from "./Footer"

function App() {
  const styles = {
    color: "#2E0927",
    backgroundColor: "#001"
  }

  let age = 20;
  let underage = "";
  if(age >= 21){
    underage = "not";
    styles.color = "#4E4"
    styles.fontSize = "20px"
  }

  return (
    <div>
      <h1 style={styles}>You are {underage} underage</h1>
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
