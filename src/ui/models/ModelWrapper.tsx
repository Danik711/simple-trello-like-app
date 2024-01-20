import ListModel from "./ListModel";
import CardModel from "./CardModel";
import EditListModel from "./EditListModel";
import EditCardModel from "./EditCardModel";
import { RootState } from "../../types/types";
import { useSelector, useDispatch } from "react-redux";
import { hidePopups } from "../../redux/reducers/uiReducer";

function ModelWrapper() {
  const showListMenu = useSelector(
    (state: RootState) => state.ui.showAddListPopup
  );
  const showCardMenu = useSelector(
    (state: RootState) => state.ui.showAddCardPopup
  );
  const showEditList = useSelector(
    (state: RootState) => state.ui.showEditListPopup
  );
  const showEditCard = useSelector(
    (state: RootState) => state.ui.showEditCardPopup
  );
  const dispatch = useDispatch();

  if (showListMenu || showCardMenu || showEditList || showEditCard) {
    return (
      <div
        onClick={() => dispatch(hidePopups())}
        className={
          "absolute w-screen h-screen bg-black/[0.5] items-center flex justify-center"
        }
      >
        {showListMenu && <ListModel />}

        {showCardMenu && <CardModel />}

        {showEditList && <EditListModel />}

        {showEditCard && <EditCardModel />}
      </div>
    );
  }

  return null;
}

export default ModelWrapper;
