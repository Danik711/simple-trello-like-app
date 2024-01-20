import Input from "../Input";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { ListType, RootState } from "../../types/types";
import { hidePopups } from "../../redux/reducers/uiReducer";
import { updateCard } from "../../redux/reducers/trelloReducer";
import { useRef, MutableRefObject, FormEvent, Fragment } from "react";

function EditCardModel() {
  const dispatch = useDispatch();
  const newCardNameRef =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const selectListRef =
    useRef<HTMLSelectElement>() as MutableRefObject<HTMLSelectElement>;
  const allLists = useSelector((state: RootState) => state.trello.listArray);
  const cardName = useSelector((state: RootState) => state.ui.focusedCardName);
  const cardIndex = useSelector(
    (state: RootState) => state.ui.focusedCardIndex
  );
  const listIndex = useSelector(
    (state: RootState) => state.ui.focusedListIndex
  );

  function submitCardUpdateHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newCardName = newCardNameRef.current.value;
    const selectedList = selectListRef.current.value;

    dispatch(updateCard([listIndex, cardIndex, newCardName, selectedList]));
    dispatch(hidePopups());
  }

  return (
    <form
      onSubmit={submitCardUpdateHandler}
      onClick={(event) => event.stopPropagation()}
      className={
        "bg-white px-8 py-6 rounded flex flex-col justify-center items-center"
      }
    >
      <h2 className={"font-bold text-xl"}>Edit "{cardName}" Card</h2>
      <div className={"flex flex-col mt-8 mb-4"}>
        <label htmlFor="edit-card-name">New Card Name</label>
        <Input reference={newCardNameRef} id={"edit-card-name"} />
      </div>
      <div className={"flex flex-col mt-4 mb-8 w-full"}>
        <label htmlFor="edit-card-list">Move Card</label>
        <select
          ref={selectListRef}
          id="edit-card-list"
          className={"border-2 border-violet-700 rounded"}
        >
          <option value={""}>Select List</option>
          {allLists.map((list: ListType, index: number) => {
            if (list.list_id !== listIndex) {
              return (
                <option key={index} value={list.list_id}>
                  {list.list_name}-{list.list_id}
                </option>
              );
            }

            return <Fragment key={listIndex}></Fragment>;
          })}
        </select>
      </div>
      <Button type={"submit"}>Update Card</Button>
    </form>
  );
}

export default EditCardModel;
