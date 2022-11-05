import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Sidebar from "./layouts/Sidebar";
import Form from "./components/Form";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/add-newtask" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
