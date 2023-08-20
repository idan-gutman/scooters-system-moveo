import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  label: string;
}

export const Button: FC<IButton> = ({ onClick, label }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

const StyledButton = styled.button`
  width: 130px;
  height: 45px;
  background: linear-gradient(230.65deg, #47bfdf 22.95%, #4a91ff 77.9%), #48bae4;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1),
    inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
