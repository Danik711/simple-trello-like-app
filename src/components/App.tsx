import Header from "./header/Header";
import LeftMenu from "./menus/LeftMenu";
import RightMenu from "./menus/RightMenu";
import ModalWrapper from "../ui/models/ModelWrapper";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen relative">
      <Header />
      <div className={"flex flex-row w-full h-full"}>
        <LeftMenu />
        <RightMenu />
      </div>
      <ModalWrapper />
    </div>
  );
}

export default App;
