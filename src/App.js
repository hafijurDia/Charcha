import About from "./components/about/About";
import Intro from "./components/intro/intro";
import ProductList from "./components/productlist/ProductList";
import Contact from './components/contact/Contact'
import Toggle from "./components/toggle/Toggle";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import Offcanvas from './OffCanvas'
// import { useState } from "react";

function App() {
const theme= useContext(ThemeContext)
const darkMode= theme.state.darkMode; 
  return (
    <div style={{ backgroundColor: darkMode? "#222": "lightyellow", color: darkMode?  "white" : "#000" }}>
      <Offcanvas />
   <Toggle />
   <Intro />
   <About />
   <ProductList />
   <Contact />
   
   </div>
  );
}


export default App;
