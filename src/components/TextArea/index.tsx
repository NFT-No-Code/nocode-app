import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form/dist/types";
import { FiAlertCircle } from "react-icons/fi";
import * as S from "./styles";

interface ICustomTextAreatProps {
  name: string;
  placeholder: string;
  label: string;
  isRequired?: boolean;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors;
}

export default function TextArea({ label, name, placeholder, isRequired, register, error }: ICustomTextAreatProps) {
  return (
    <S.AreaGroup>
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
      <S.TextAreaWrapper error={error[name]}>
        <S.CustomTextArea placeholder={placeholder} {...register(name)}></S.CustomTextArea>
        <FiAlertCircle size={20} />
      </S.TextAreaWrapper>
      {error[name] && <span className="errorMessage">{error[name]?.message?.toString()}</span>}
    </S.AreaGroup>
  );
}
