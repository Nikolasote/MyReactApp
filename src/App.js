import React from 'react';
import './main.css';
import Header from "./components/Header"
import Description from "./components/Description"
import SearchTable from "./components/SearchTable"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <SearchTable />
      <Footer />
    </div>
  );
}

export default App;
