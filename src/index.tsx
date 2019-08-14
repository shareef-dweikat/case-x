import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./App";
import Routes from "./routes";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
// import registerServiceWorker from "./registerServiceWorker";
import { unregister } from "./registerServiceWorker";

unregister();
const ParallaxApp = (
  <ParallaxProvider>
    <Routes />
  </ParallaxProvider>
);
ReactDOM.render(ParallaxApp, document.getElementById("root") as HTMLElement);
// registerServiceWorker();
