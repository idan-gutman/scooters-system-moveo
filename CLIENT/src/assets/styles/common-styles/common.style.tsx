import { Star } from 'icons/svg';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { breakpoints } from '../theme';

export const Wrapper = styled.div.attrs({ className: 'Wrapper' })`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border-radius:20px;
  margin-top:80px;
  margin: 0 2.0625rem;
  
  @media (${breakpoints.minMobile}) {
    margin: 80px 10vw;
  }
  @media (${breakpoints.laptopLarge}) {
    margin: 80px 20vw;
  }
`;

export const PageContainer = styled.div`
  /* margin: 0 2.0625rem;
  @media (${breakpoints.minMobile}) {
    margin: 0 10vw;
  }
  @media (${breakpoints.laptopLarge}) {
    margin: 0 20vw;
  } */
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OutlinedBtn = styled.button`
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 23px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  border-radius: 10px;
  width: 230px;
  height: 55px;
  background: none;
`;

export const StarIcon = styled(Star)`
  cursor: pointer;
  width: 36px;
  height: 36px;
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
    min-width: max-content;
    color: white;
    border-radius: 10px;
    text-align: center;
    letter-spacing: 1px;
  }
  .Toastify__toast-icon {
    display: none;
  }
`;
