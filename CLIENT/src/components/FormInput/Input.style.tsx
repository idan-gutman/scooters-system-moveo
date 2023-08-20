import styled from 'styled-components';

export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.inputWhite};
  width: 100%;
  background: ${({ theme }) => theme.colors.inputWhite};
  border-radius: 10px;
  padding: 14px 24px;
  position: relative;

  :focus-within {
    border: 1px solid ${({ theme }) => theme.colors.greyBlue};
    background: inherit;
    label {
      font-weight: 700;
    }
  }
`;
interface LabelProps {
  isValid: boolean;
}
export const LabelInput = styled.label<LabelProps>`
  font-style: normal;
  font-size: 0.875rem;
  line-height: 16px;
  color: ${({ isValid, theme }) =>
    isValid ? theme.colors.pinkError : theme.colors.grey};
`;

export const ErrorText = styled.span.attrs({ className: `error-message` })`
  position: absolute;
  bottom: -24px;
  left: 24px;
  width: inherit;
  color: ${({ theme }) => theme.colors.pinkError};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
`;

export const StyledInput = styled.input.attrs(({ name }) => ({
  className: `styled-input styled-input-${name}`,
}))`
  border: none;
  background-color: inherit;
  width: inherit;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 21px;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-family: 'Overpass';
    color: ${({ theme }) => theme.colors.placeholderGray};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 23px;
  }
`;
