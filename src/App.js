import React from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Article2 from "./pages/Article2";
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
          <Route path="/Article2/:articleId" element={<Article2 />} />
          <Route path="/Article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
