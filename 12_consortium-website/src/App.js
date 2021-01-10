import React from "react";
import Header from "./components/header";
import About from "./components/home/about";
import Activity from "./components/home/activity";
import Marquu from "./components/home/marquu";
import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Marquu />
      <Activity />
    </div>
  );
}

export default App;
