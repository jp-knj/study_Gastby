import React from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Cases from "./components/cases";


function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
