import Input from "../Input";
import Button from "../Button";
import { ListType } from "../../types/types";
import { RootState } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, MutableRefObject, useRef } from "react";
import { hidePopups } from "../../redux/reducers/uiReducer";
import { addNewList } from "../../redux/reducers/trelloReducer";

function ListModel() {
  const dispatch = useDispatch();
  const listSize = useSelector(
    (state: RootState) => state.trello.listArray.length
  );
  const listNameRef =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  function submitNewListHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const listName = listNameRef.current?.value;
    const list: ListType = {
      cards: [],
      list_name: listName.trim(),
      list_id: listSize.toString(),
    };

    dispatch(hidePopups());
    dispatch(addNewList(list));
  }

  return (
    <form
      onSubmit={submitNewListHandler}
      onClick={(event) => event.stopPropagation()}
      className={
        "bg-white px-8 py-6 rounded flex flex-col justify-center items-center"
      }
    >
      <h2 className={"font-bold text-xl"}>Add a New List</h2>
      <div className={"flex flex-col my-8"}>
        <label htmlFor="list-name">List Name</label>
        <Input reference={listNameRef} id={"list-name"} required />
      </div>
      <Button type={"submit"}>Create List</Button>
    </form>
  );
}

export default ListModel;
