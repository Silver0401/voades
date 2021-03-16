import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import anime from "animejs";

// App Main Components
import NavBar from "./components/nav";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ResourcesPage from "./pages/Resources";

const VerticalPageUnit : React.FC = () => {
  return(
  <div className="AppContainer">
    <HomePage />

    <AboutPage />

    <ContactPage />
  </div>
  )
}


const App : React.FC = () => {

  const [siteStructure] = useState <"vertical" | "horizontal"> ("vertical")

  useEffect(() => {

		function MoveLoader() {
      const Loader = anime.timeline({
        easing: "easeInOutSine",
      });

      Loader.add({
        targets: "#LoaderText1",
        translateY: ["100px", "0px"],
        duration: 750,
        delay: 200,
        easing: "linear"
      })
      Loader.add({
        targets: "#LoaderText2",
        translateY: ["100px", "0px"],
        duration: 750,
        easing: "linear"
      },"+=250")
      Loader.add({
        targets: "#LoaderText3",
        translateY: ["100px", "0px"],
        duration: 750,
        easing: "linear"
      },"+=250")

      Loader.add({
        targets: ".MovingBox",
        duration: 2200,
        translateY: ["120%", "-120%"],
      }, "+=500");

      Loader.add(
        {
          targets: ".Loader",
          duration: 750,
          height: "0px",
        },
        "-=1700"
      );

      Loader.add(
        {
          targets: ".AppContainer",
          opacity: [0,1],
        },
        "-=1000"
      );

    }

    window.onload = () => {
      MoveLoader()
    }

  }, [])

  return (
    <div className="App">
      <NavBar siteStructure={siteStructure} />

      {siteStructure === "vertical" ? (
        // <div className="AppContainer">

        <Switch>
          <Route exact path="/" component={VerticalPageUnit} />

          <Route exact path="/Resources" component={ResourcesPage} />
        </Switch>

      ) : (
        <div className="AppContainer">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/About" component={AboutPage} />
            <Route exact path="/Contact" component={ContactPage} />
          </Switch>
        </div>
      )}

      <span className="Loader">
        <span className="box">
          <div>
            <h3 id="LoaderText1">Todos podemos dar</h3>
          </div>
          <div>
            <h4 id="LoaderText2">Todos necesitamos recibir</h4>
          </div>
          <div>
            <h5 id="LoaderText3">- Serafín Madrid</h5>
          </div>
        </span>

        <div className="MovingBox"></div>
      </span>
    </div>
  );
}

export default App;
