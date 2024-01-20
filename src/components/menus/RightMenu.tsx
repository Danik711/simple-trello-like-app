import List from "../../ui/List";
import { useSelector } from "react-redux";
import { ListType, RootState } from "../../types/types";
function RightMenu() {
  const allLists = useSelector((state: RootState) => state.trello.listArray);

  return (
    <div
      className={
        "bg-white p-4 flex flex-row w-full overflow-x-scroll flex-auto w-full"
      }
    >
      {allLists.map((list: ListType, index: number) => {
        return (
          <List
            key={index}
            cards={list.cards}
            list_id={list.list_id}
            list_name={list.list_name}
          />
        );
      })}
    </div>
  );
}

export default RightMenu;
