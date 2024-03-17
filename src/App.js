import About from "./components/about/About";
import Intro from "./components/intro/intro";
import ProductList from "./components/productlist/ProductList";
import Contact from './components/contact/Contact'
import Toggle from "./components/toggle/Toggle";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import Offcanvas from './OffCanvas'
import Header from "./components/header/Header";
import Container from 'react-bootstrap/Container';
// import { useState } from "react";

function App() {
const theme= useContext(ThemeContext)
const darkMode= theme.state.darkMode; 
  return (
    <div style={{ backgroundColor: darkMode? "#222": "#ffffff", color: darkMode?  "white" : "#000" }}>
      <Container>
      <Header></Header>
      {/* <Offcanvas /> */}
   <Toggle />
   <Intro />
   <About />
   <ProductList />
   <Contact />
   </Container>
   </div>
  );
}


export default App;
