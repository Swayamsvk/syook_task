import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import Tabone from "./components/Tabone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tabone" element={<Tabone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
