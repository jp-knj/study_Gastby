import React from "react";
import "./styles/App.scss";
import IntroOverlay from "./components/introOverlay";
import Header from "./components/header";
import Banner from "./components/banner";
import Cases from "./components/cases";


function App() {
  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
