import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

const AddCardForum = ({ cardData, updateItem, addItem }) => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  useEffect(() => {
    if (cardData !== undefined) {
      setWord(cardData.word);
      setMeaning(cardData.meaning);
    }
  }, []);

  return (
    <section className="add-list-item">
      <div>
        <h3 className="card-form-heading">
          {cardData ? "Update Card" : "Add New Card"}
        </h3>
        <input
          autoComplete="off"
          autoFocus={true}
          type="text"
          name="word"
          id="word"
          placeholder="Enter Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          autoComplete="off"
          type="text"
          name=" meaning"
          id="meaning"
          placeholder="Enter Meaning"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
        <button
          onClick={() => {
            if (cardData) updateItem({ word, meaning });
            else addItem({ word, meaning });
          }}
          disabled={!word && !meaning}
        >
          {cardData ? "Update" : "Add"}
        </button>
      </div>
    </section>
  );
};

export const AddCard = ({ match }) => {
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const cardData = useLocation().state;

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    setCards(data);
  }, []);

  const addItem = (data) => {
    const newCards = [...cards, data];
    setCards(newCards);
    localStorage.setItem("data", JSON.stringify(newCards));
    history.replace("/");
  };

  const updateItem = (data) => {
    const index = cards.findIndex((card) => card.word === cardData.word);
    const newCards = [...cards];
    newCards[index] = data;
    localStorage.setItem("data", JSON.stringify(newCards));
    history.replace("/");
  };

  return (
    <AddCardForum
      cardData={cardData}
      updateItem={updateItem}
      addItem={addItem}
    />
  );
};
