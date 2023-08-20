import { breakpoints } from 'assets/styles/theme';
import styled from 'styled-components';

export const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  @media (${breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.greyBlue};
  }

  svg {
    height: 34px;
    width: 34px;
    margin-right: 12.5px;
    @media (${breakpoints.laptopSmall}) {
      margin-left: 12.5px;
    }
    @media (${breakpoints.mobile}) {
      height: 25px;
      width: 25px;
      margin-right: 7px;
    }
    & :nth-child(1),
    & :nth-child(2) {
      stroke: ${({ theme }) => theme.colors.white};
      @media (${breakpoints.mobile}) {
        stroke: ${({ theme }) => theme.colors.greyBlue};
      }
    }
  }
`;

export const LogOutText = styled.p<{ isHeader?: boolean }>`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 25px;
  text-decoration-line: underline;
  text-underline-position: under;
  white-space: nowrap;
  @media (${breakpoints.mobile}) {
    font-weight: 400;
    font-size: 1.125rem;
  }
  @media (${breakpoints.laptopSmall}) {
    display: ${({ isHeader }) => (isHeader ? 'none' : 'block')};
  }
`;
