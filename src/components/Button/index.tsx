import { ReactNode } from "react";
import * as S from "./styles";
import { MouseEventHandler } from "react";

interface IButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: IButtonProps) {
  return <S.MainButton onClick={onClick}>{children}</S.MainButton>;
}
