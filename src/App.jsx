import { useState, useEffect } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";

import Routers from './routers'

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routers />
    </>
  )
}

export default App
