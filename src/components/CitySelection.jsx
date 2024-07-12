import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import yapkashnagarImage from "../assets/yapkashnagar.png";
import lihaspurImage from "../assets/lihaspur.png";
import narmisCityImage from "../assets/narmisCity.png";
import shekharvatiImage from "../assets/shekharvati.png";
import nuravgramImage from "../assets/nuravgram.png";

import cop1Image from "../assets/cop1Image.png";
import cop2Image from "../assets/cop2Image.png";
import cop3Image from "../assets/cop3Image.png";

const cities = [
  { name: "Yapkashnagar", distance: 60, image: yapkashnagarImage },
  { name: "Lihaspur", distance: 50, image: lihaspurImage },
  { name: "Narmis City", distance: 40, image: narmisCityImage },
  { name: "Shekharvati", distance: 30, image: shekharvatiImage },
  { name: "Nuravgram", distance: 20, image: nuravgramImage },
];

const copImages = {
  "Cop 1": cop1Image,
  "Cop 2": cop2Image,
  "Cop 3": cop3Image,
};

const CitySelection = () => {
  const [selectedCities, setSelectedCities] = useState({});
  const [activeButtons, setActiveButtons] = useState({});
  const [currentCop, setCurrentCop] = useState("Cop 1"); // Initial cop selection
  const navigate = useNavigate();

  const handleSelectCity = (cop, city) => {
    setSelectedCities({ ...selectedCities, [cop]: city });
    setActiveButtons({ ...activeButtons, [cop]: city.name });
  };

  const handleNext = () => {
    const allCops = ["Cop 1", "Cop 2", "Cop 3"];
    const allSelected = allCops.every((cop) => selectedCities[cop]);

    if (allSelected) {
      navigate("/vehicle-selection", { state: selectedCities });
    } else {
      toast.error("Please select a city for each cop.");
    }
  };

  const handleCopChange = (cop) => {
    setCurrentCop(cop);
  };

  return (
    <div>
      <h1>Select a city for each cop to investigate</h1>
      {["Cop 1", "Cop 2", "Cop 3"].map((cop) => (
        <div key={cop} className="cop-text">
          <h2>{cop}</h2>
          <img
            src={copImages[cop]}
            alt={`${cop} Image`}
            style={{
              maxWidth: "200px",
              height: "auto",
              borderRadius: "18px",
              marginLeft: "20px",
            }}
          />
          <div className="city-selection">
            {cities.map((city) => (
              <div key={city.name} className="city-card">
                <button
                  onClick={() => handleSelectCity(cop, city)}
                  className={`city-button ${
                    activeButtons[cop] === city.name ? "active" : ""
                  }`}
                >
                  <span className="city-text">
                    {city.name} ({city.distance} KM)
                  </span>
                </button>
                <img src={city.image} alt={city.name} className="city-image" />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleNext} className="next">
        Next
      </button>
      <ToastContainer />
    </div>
  );
};

export default CitySelection;
