import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import CitySelection from "./components/CitySelection";
import VehicleSelection from "./components/VehicleSelection";
import ResultPage from "./components/ResultPage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/city-selection" element={<CitySelection />} />
        <Route path="/vehicle-selection" element={<VehicleSelection />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
