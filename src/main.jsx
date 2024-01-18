import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Competencias from './pages/Competencias.jsx'
import Contato from './pages/Contato.jsx'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home />}/>
          <Route path="competencias" element={<Competencias/>} />
          <Route path="contato" element={<Contato/>} />
          <Route path="projetos" element={<Projetos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
