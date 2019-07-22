import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
//import './styles/App.css';
import { TopNavBar } from './components/TopNavBar';
import { Main } from './components/Main'

function App() {
  return (
   <div className="App">
     <TopNavBar/>
     <Main/>
   </div>
  )
}

export default App;
