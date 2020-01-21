import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Books from "./pages/Books"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Books />
    </div>
  );
}

export default App;
