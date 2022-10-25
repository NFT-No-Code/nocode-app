import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import { FiAlertCircle } from "react-icons/fi";
import * as S from "./styles";

interface ICustomInputProps {
  name: string;
  placeholder: string;
  label: string;
  isRequired?: boolean;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler | undefined;
}

export default function Input({ name, placeholder, label, isRequired, register, error, type, onChange }: ICustomInputProps) {
  return (
    <S.InputGroup>
      <label htmlFor={name}>
        {isRequired ? (
          <>
            {label}
            <span> *</span>
          </>
        ) : (
          label
        )}
      </label>
      <S.InputWrapper error={error[name]}>
        <S.CustomInput placeholder={placeholder} {...register(name)} type={type ? type : "text"} onChange={onChange} />
        <FiAlertCircle size={20} />
      </S.InputWrapper>
      {error[name] && <span className="errorMessage">{error[name]?.message?.toString()}</span>}
    </S.InputGroup>
  );
}
