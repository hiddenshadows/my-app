import './App.css';

import React from 'react';
//import ReactDOM from 'react-dom'

import Header from "./Header"
import MyInfo from "./MyInfo"
import Footer from "./Footer"
import Joker from './joke'
import Product from './product'

function App() {
  const styles = {
    color: "##FFFFFF",
    backgroundColor: "#000000"
  }

  let date = new Date();
  let hours = date.getHours();
  let message = "";
  if(hours < 12 && hours > 5){
    message= "Good Morning";
    styles.color = "#D3FF00";
    styles.backgroundColor = "#0098FF";
    styles.fontSize = "20px"
  } else if (hours >= 12 && hours < 7) {
    message= "Good afternoon!";
    styles.color = "#01FDFF";
    styles.backgroundColor = "#0301FF";
  } else {
    message = "Good Night";
    styles.color = "#002C99";
    styles.backgroundColor = "#6D0099";
  }

  return (
    <div>
      <h1 style={styles}>{message}</h1>
      <Header />
      <Joker />
      <Product />
      <MyInfo />
      <Footer />
    </div>
  );
}

// capital makes it a JSX element
// lowercase is a normal JS function


// only one default per file
export default App;
