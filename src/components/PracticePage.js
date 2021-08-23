import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import FlashCard from "./FlashCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function PracticePage({}) {
  const [characters, setCharacters] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key == "ArrowLeft")
        setCurrentCard((prev) => {
          if (prev == 0) return prev;
          return prev - 1;
        });

      if (e.key == "ArrowRight")
        setCurrentCard((prev) => {
          if (prev + 1 >= characters.length) return prev;
          return prev + 1;
        });
    });
    let mylist = JSON.parse(localStorage.getItem("data"));
    setCharacters(mylist);
  }, []);

  const swipe = (dir) => {
    if (dir === "right") setCurrentCard(currentCard + 1);
    else setCurrentCard(currentCard - 1);
  };

  return (
    <div id="PracticePage">
      <div>
        <div className="progress-container">
          <progress value={currentCard} max={characters.length - 1}></progress>
        </div>
        <div className="cardContainer">
          <button
            className="move-btn"
            disabled={currentCard === 0}
            onClick={() => swipe("left")}
          >
            <AiOutlineArrowLeft />
          </button>
          {characters.length > 0 ? (
            <FlashCard character={characters[currentCard]} />
          ) : null}
          <button
            className="move-btn"
            disabled={currentCard + 1 >= characters.length}
            onClick={() => swipe("right")}
          >
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="buttons"></div>
      </div>
    </div>
  );
}
