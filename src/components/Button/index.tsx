import { ReactNode } from "react";
import * as S from "./styles";

interface IButtonProps {
  children: ReactNode;
}

export default function Button({ children }: IButtonProps) {
  return <S.MainButton>{children}</S.MainButton>;
}
