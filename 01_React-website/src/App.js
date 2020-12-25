import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";

// pages
import Activity from "./pages/activity";
import Members from "./pages/members";
import Home from "./pages/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/", name: "members", Component: Members },
  { path: "/about-us", name: "activity", Component: Activity }
];

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
      <Header/>
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
