import { FC, InputHTMLAttributes } from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import * as Styled from 'components/FormInput/Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const FormInput: FC<InputProps> = (props) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  const { type, placeholder, name, label } = props;

  return (
    <Styled.InputWrapper className={`input-wrapper input-wrapper-${name}`}>
      <Styled.LabelInput isValid={!!errors[name]} htmlFor={name}>
        {label}
      </Styled.LabelInput>
      <Styled.StyledInput
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <Styled.ErrorText>{message}</Styled.ErrorText>}
      />
    </Styled.InputWrapper>
  );
};

export default FormInput;
