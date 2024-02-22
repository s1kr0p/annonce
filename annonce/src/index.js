import React from 'react';
import ReactDOM from 'react-dom/client';
import NoPage from "./pages/NoPage";
import Home from "./pages/home";
import "./styles/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="index" element={<Home />} />
        <Route path="acceuil" element={<Home />} />
        
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
