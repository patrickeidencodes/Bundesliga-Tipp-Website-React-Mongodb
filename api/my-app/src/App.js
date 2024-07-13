// @ts-nocheck
import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import { Tipps } from "./pages/tipps/Tipps.jsx";
import Aos from "aos";
import "aos/dist/aos.css"
import { Tabelle } from './pages/tabelle/Tabelle.jsx';
import { Anmelden } from './pages/anmelden/Anmelden.jsx';
import { Registrieren } from './pages/reg/Reg.jsx';
import { Info } from './pages/kontakt/Info.jsx';
import { News } from './pages/news/News.jsx';
import { WM } from './pages/wm/Wm.jsx';

function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tipps" element={<Tipps/>}/>
        <Route path="/tabelle" element={<Tabelle/>}/>
        <Route path="/anmelden" element={<Anmelden/>}/>
        <Route path="/registrieren" element={<Registrieren/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/wm" element={<WM/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;