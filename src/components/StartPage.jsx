import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Fugitive Capture Game</h1>
      <img
        src="https://i.pinimg.com/736x/63/aa/b1/63aab1661749c31a058a67f36f044386.jpg"
        alt=""
      />
      <br />
      <button onClick={() => navigate("/city-selection")} className="start">
        Start Game
      </button>
    </div>
  );
};

export default StartPage;
