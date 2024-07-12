import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/check",
          state
        );
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching result:", error);
      }
    };
    fetchResult();
  }, [state]);

  return (
    <div>
      <h1>Result</h1>
      {result ? (
        result.success ? (
          <h2>{result.message}</h2>
        ) : (
          <h2>No cop captured the fugitive.</h2>
        )
      ) : (
        <h2>Loading...</h2>
      )}
      <img
        src="https://media.istockphoto.com/id/1488289968/vector/two-policemen-and-woman-arrested-criminal-and-handcuffed-him-lawbreaker-punishment-detention.jpg?s=612x612&w=0&k=20&c=oDjZoTC4988K_07sZZSrlqgZgqkDX6e8wS7wmv5AdTI="
        alt=""
      />
      <button onClick={() => navigate("/")} className="return">
        Return Home
      </button>
    </div>
  );
};

export default ResultPage;
