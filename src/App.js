import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Query from "./pages/Query";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" index element={<Home></Home>}></Route>
          <Route path="/sorgula" element={<Query></Query>}></Route>
          <Route path="/ekle" element={<Add></Add>}></Route>
          <Route path="/giris" element={<Login></Login>}></Route>
          <Route path="/kayit-ol" element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
