function Header() {
  return (
    <div
      className={
        "pl-6 flex flex-col bg-white w-full h-24 justify-center border-b-2 border-black"
      }
    >
      <h1 className={"text-violet-700 text-3xl"}>Simple Trello App</h1>
      <p className={"text-violet-700"}>Author: Daniil Klishin</p>
    </div>
  );
}

export default Header;
