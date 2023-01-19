import { ButtonProps } from "../models/interfaces";

export function ButtonStyled({ text, type , onClickEvent }: ButtonProps) {
  return <button type={type} className="font-medium border
  border-white
  rounded-md
  py-2
  px-5
  hover:border-transparent
  hover:bg-white
  hover:text-[#202020]
  transition-colors" onClick={onClickEvent}>{text}</button>
}