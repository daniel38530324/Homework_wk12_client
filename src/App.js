import React from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "./styles/style2.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article/:articleId" element={<Article />} />
          <Route path="/Article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
