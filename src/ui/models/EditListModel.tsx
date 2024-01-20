import Input from "../Input";
import Button from "../Button";
import { RootState } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, MutableRefObject, useRef } from "react";
import { hidePopups } from "../../redux/reducers/uiReducer";
import { updateList } from "../../redux/reducers/trelloReducer";

function EditListModel() {
  const dispatch = useDispatch();
  const listId = useSelector((state: RootState) => state.ui.focusedListIndex);
  const listName = useSelector((state: RootState) => state.ui.focusedListName);
  const newListNameRef =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  function submitEditListHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newListName = newListNameRef.current?.value;

    dispatch(hidePopups());
    dispatch(updateList([listId, newListName]));
  }

  return (
    <form
      onSubmit={submitEditListHandler}
      onClick={(event) => event.stopPropagation()}
      className={
        "bg-white px-8 py-6 rounded flex flex-col justify-center items-center"
      }
    >
      <h2 className={"font-bold text-xl"}>Edit "{listName}" List</h2>
      <div className={"flex flex-col my-8"}>
        <label htmlFor="edit-list-name">New List Name</label>
        <Input reference={newListNameRef} id={"edit-list-name"} required />
      </div>
      <Button type={"submit"}>Update List</Button>
    </form>
  );
}

export default EditListModel;
