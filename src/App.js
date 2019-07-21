import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
//import './styles/App.css';
import { TopBar } from './components/TopBar';
import { Main } from './components/Main'

function App() {
  return (
   <div className="App">
     <TopBar/>
     <Main/>
   </div>
  )
}

export default App;
