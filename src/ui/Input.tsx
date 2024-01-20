import { ChangeEventHandler, MutableRefObject } from "react";

type InputType = {
  id?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  reference?: MutableRefObject<HTMLInputElement>;
};

function Input({
  id,
  value,
  onChange,
  reference,
  placeholder,
  required = false,
}: InputType) {
  return (
    <input
      id={id}
      autoFocus
      value={value}
      type={"text"}
      ref={reference}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
      className={"pl-2 border-2 border-violet-700 rounded"}
    />
  );
}

export default Input;
