import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Home from "./pages/home"
import { _colorStringFilter } from "gsap/gsap-core";


function App() {

  useEffect(() => {
    // Grab inner height of window for mobile reasons when dealing with vh
    let vh = window.innerHeight * 0.01;
    // Set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
