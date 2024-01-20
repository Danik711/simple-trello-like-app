import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { displayListPopup } from "../../redux/reducers/uiReducer";

function LeftMenu() {
  const dispatch = useDispatch();

  return (
    <div
      className={
        "bg-slate-500 w-1/4 flex flex-col items-center bg-white border-r-2 border-black"
      }
    >
      <Button type={"button"} onClick={() => dispatch(displayListPopup())}>
        Add a List
      </Button>
    </div>
  );
}

export default LeftMenu;
