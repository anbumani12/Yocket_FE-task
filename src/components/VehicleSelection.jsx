import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cop1Image from "../assets/cop1Image.png";
import cop2Image from "../assets/cop2Image.png";
import cop3Image from "../assets/cop3Image.png";

import evBikeImage from "../assets/EvBike.png";
import evCarImage from "../assets/EvCar.png";
import evSUVImage from "../assets/EvSuv.png";

const vehicles = [
  { type: 'EV Bike', range: 60, count: 2, imageUrl: evBikeImage },
  { type: 'EV Car', range: 100, count: 1, imageUrl: evCarImage },
  { type: 'EV SUV', range: 120, count: 1, imageUrl: evSUVImage },
];

const copImages = {
  "Cop 1": cop1Image,
  "Cop 2": cop2Image,
  "Cop 3": cop3Image,
};

const VehicleSelection = () => {
  const { state: selectedCities } = useLocation();
  const [selectedVehicles, setSelectedVehicles] = useState({});
  const navigate = useNavigate();

  const handleSelectVehicle = (cop, vehicle) => {
    setSelectedVehicles({ ...selectedVehicles, [cop]: vehicle });
  };

  const handleFinish = () => {
    const allCops = ['Cop 1', 'Cop 2', 'Cop 3'];
    const allSelected = allCops.every((cop) => selectedVehicles[cop]);

    if (allSelected) {
      navigate('/result', { state: { selectedCities, selectedVehicles } });
    } else {
      toast.error('Please select a vehicle for each cop.');
    }
  };

  return (
    <div>
      <h1>Select a vehicle for each cop</h1>
      <div className="vehicle-selection">
        {["Cop 1", "Cop 2", "Cop 3"].map((cop) => (
          <div key={cop} className="vehicle-card">
            <h2>{cop}</h2>
            <img
              src={copImages[cop]}
              alt={`${cop} Image`}
              className="vehicle-image"
            />
            <div className="vehicle-options">
              {vehicles.map((vehicle) => (
                <div key={vehicle.type}>
                  <button
                    onClick={() => handleSelectVehicle(cop, vehicle)}
                    className={`vehicle-button ${selectedVehicles[cop] === vehicle ? 'active' : ''}`}
                  >
                    <img src={vehicle.imageUrl} alt={vehicle.type} className="vehicle-image" />
                    {vehicle.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleFinish} className="next">Finish</button>
      <ToastContainer />
    </div>
  );
};

export default VehicleSelection;
