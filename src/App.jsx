import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portifolio from "./components/portifolio/Portifolio";
import Works from "./components/works/Works";
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

import "./app.scss"
import { useState } from "react";



function App() {
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Portifolio/>
      <Works/>
      <Testmonials/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
