import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//import "./App.css";
import Resume from "./components/Resume.js";
import { Route } from "react-router-dom";
import Home from "./components/";
import Portfolio from "./components/Portfolio"
import ContactForm from "./components/ContactForm";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import Contact from "./components/Contact.js";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: 0.5
    
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contact} />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enabled: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enabled: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}/>
    </>
  );
}

export default App;
