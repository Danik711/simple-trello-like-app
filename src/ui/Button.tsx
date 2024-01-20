import { MouseEventHandler, ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  type: "submit" | "reset" | "button" | undefined;
};

function Button({ children, onClick, type }: ButtonType) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={"w-4/5 bg-violet-700 text-white my-4 py-2 rounded"}
    >
      {children}
    </button>
  );
}

export default Button;
