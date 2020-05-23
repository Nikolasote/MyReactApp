import React from 'react';
import './main.css';
import Header from "./components/Header"
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <MovieList />
      <Footer />
    </div>

  );
}

export default App;
