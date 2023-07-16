import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBackClick} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">⬅ Go Back</button>
  );
};

export default BackButton;
