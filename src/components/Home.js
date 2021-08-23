import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const FlashCardItem = ({ word, meaning, index, deleteCard }) => {
  const history = useHistory();

  return (
    <div className="card-item">
      <h2>{word}</h2>

      <div>
        <AiFillEdit
          className="icon"
          size={24}
          onClick={() => {
            history.push("/createList", { word, meaning });
          }}
        />
        <AiFillDelete
          className="icon"
          size={24}
          onClick={() => {
            deleteCard(word);
          }}
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data == null) localStorage.setItem("data", JSON.stringify([]));
    setCardList(JSON.parse(data));
  }, []);

  const deleteCard = (word) => {
    let newList = [...cardList];
    newList = newList.filter((x) => x.word != word);
    // newList.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(newList));
    setCardList(newList);
  };

  return (
    <div className="home">
      <article className="practice-list">
        <h1>Cards</h1>
        <section>
          {cardList.map((x, i) => {
            return (
              <FlashCardItem
                key={"flashitem" + i}
                word={x.word}
                meaning={x.meaning}
                index={i}
                deleteCard={deleteCard}
              />
            );
          })}
        </section>
      </article>
    </div>
  );
};

export default Home;
