import { useState } from "react";
import "../styles/FlashCard.css";
const FlashCard = ({ character }) => {
  const { word, meaning } = character;
  const [clickStyle, setClickStyle] = useState("");

  const handleCardClick = () => {
    setClickStyle((prev) => {
      if (prev === "") return " card-clicked";
      return "";
    });
  };

  return (
    <div className="flash-card" onClick={handleCardClick}>
      <div className={"flash-card-inner" + clickStyle}>
        <div className="card-front">
          <div className="card-content">
            <div className="card-heading">
              <h2>Question</h2>
            </div>
            <div className="card-inner">
              <h2>{word}</h2>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="card-content">
            <div className="card-heading">
              <h2>Answer</h2>
            </div>
            <div className="card-inner">
              <h2>{meaning}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
