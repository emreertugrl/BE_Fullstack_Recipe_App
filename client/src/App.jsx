import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Undifined from "./pages/Undifined";
import Update from "./pages/Update";
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />

        <div className="flex-1  bg-gray-200 p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarif/:" element={<Detail />} />
            <Route path="/ekle" element={<Create />} />
            <Route path="/güncelle" element={<Update />} />
            <Route path="*" element={<Undifined />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
