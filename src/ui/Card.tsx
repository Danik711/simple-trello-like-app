import { useDispatch } from "react-redux";
import { displayEditCardPopup } from "../redux/reducers/uiReducer";

type CardComponentType = {
  card_name: string;
  card_id: string;
  list_id: string;
};

function Card({ card_name, card_id, list_id }: CardComponentType) {
  const dispatch = useDispatch();

  function openEditCardModel() {
    dispatch(displayEditCardPopup([card_name, card_id, list_id]));
  }

  return (
    <div
      className={
        "bg-white px-2 rounded-lg border-2 border-black my-2 flex flex-row justify-between"
      }
    >
      <p className={"text-black"}>{card_name}</p>
      <img
        alt={"pen"}
        onClick={openEditCardModel}
        src={require("../images/pen.png")}
        className={"w-4 h-4 cursor-pointer self-center"}
      />
    </div>
  );
}

export default Card;
