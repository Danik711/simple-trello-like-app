import Input from "../Input";
import Button from "../Button";
import { RootState } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { FormEvent, useRef, MutableRefObject } from "react";
import { hidePopups } from "../../redux/reducers/uiReducer";
import { addNewCard } from "../../redux/reducers/trelloReducer";

function CardModel() {
  const dispatch = useDispatch();
  const cardNameRef =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const listName = useSelector((state: RootState) => state.ui.focusedListName);
  const listIndex = useSelector(
    (state: RootState) => state.ui.focusedListIndex
  );

  function submitNewCardHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cardName = cardNameRef.current.value;
    dispatch(addNewCard([listIndex, cardName.trim()]));
    dispatch(hidePopups());
  }

  return (
    <form
      onSubmit={submitNewCardHandler}
      onClick={(event) => event.stopPropagation()}
      className={
        "bg-white px-8 py-6 rounded flex flex-col justify-center items-center"
      }
    >
      <h2 className={"font-bold text-xl"}>Add a New Card into {listName}</h2>
      <div className={"flex flex-col my-8"}>
        <label htmlFor="card-name">Card Name</label>
        <Input reference={cardNameRef} id={"card-name"} required />
      </div>
      <Button type={"submit"}>Create Card</Button>
    </form>
  );
}

export default CardModel;
