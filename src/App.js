import React from 'react';
import Routes from "./routes";

import Header from './components/Header';
import Footer from './components/Footer';
import Api from './services/api';
import Main from './pages/main';

import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;