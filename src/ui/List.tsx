import Card from "./Card";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { CardType, ListType } from "../types/types";
import {
  displayCardPopup,
  displayEditListdPopup,
} from "../redux/reducers/uiReducer";

function List({ list_name, cards, list_id }: ListType) {
  const dispatch = useDispatch();

  function showAddCardPopupHandler() {
    dispatch(displayCardPopup([list_name, list_id]));
  }

  function openEditListHandler() {
    dispatch(displayEditListdPopup([list_name, list_id]));
  }

  return (
    <div
      className={
        "flex flex-col bg-emerald-100 rounded-lg min-w-60 w-60 p-4 self-start mr-8"
      }
    >
      <div className={"flex flex-row justify-between"}>
        <h3 className={"text-black font-bold mb-4"}>{list_name}</h3>
        <img
          alt={"pen"}
          onClick={openEditListHandler}
          src={require("../images/pen.png")}
          className={"w-5 h-5 cursor-pointer"}
        />
      </div>
      <ul>
        {cards.map((card: CardType, index: number) => {
          return (
            <li key={index}>
              <Card
                list_id={list_id}
                card_id={card.card_id}
                card_name={card.card_name}
              />
            </li>
          );
        })}
      </ul>
      <div className={"w-full flex flex-row justify-center"}>
        <Button type={"button"} onClick={showAddCardPopupHandler}>
          Add a Card
        </Button>
      </div>
    </div>
  );
}

export default List;
