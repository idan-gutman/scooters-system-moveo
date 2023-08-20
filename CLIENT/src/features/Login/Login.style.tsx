import { breakpoints } from 'assets/styles/theme';
import { Moon } from 'icons/svg';
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.button};
`;

export const LoginModal = styled.div`
  max-width: 600px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: relative;
  margin: 0 auto;
  @media (${breakpoints.mobile}) {
    min-height: 100%;
    border-radius: 30px 30px 0 0px;
  }
  h1 {
    font-weight: 900;
    font-size: 3.125rem;
    line-height: 63px;
    color: ${({ theme }) => theme.colors.greyBlue};
    margin-bottom: 57px;
    @media (${breakpoints.mobile}) {
      font-size: 1.875rem;
      line-height: 38px;
      margin-bottom: 34px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (${breakpoints.mobile}) {
    width: 85%;
  }
  .input-wrapper-password {
    margin-top: 34px;
  }
`;

export const ButtonLogin = styled.button`
  margin-top: 48px;
  padding: 0.8125rem;
  background: ${({ theme }) => theme.colors.button};
  box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16),
    inset 2px -3px 6px rgba(0, 0, 0, 0.1),
    inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.4375rem;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;

export const Divider = styled.div`
  margin-top: 43px;
  margin-bottom: 35px;
  display: flex;
  width: 90%;
  @media (${breakpoints.mobile}) {
    margin-bottom: 29px;
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.greyBlue};
    min-width: 140px;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 18px;
    @media (${breakpoints.mobile}) {
      font-weight: 400;
    }
  }
  hr {
    width: 246px;
    border-radius: 0px;
    border: 1px solid #e1e1e1;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 50px;
    @media (${breakpoints.mobile}) {
      margin-right: 0;
      margin-bottom: 29px;
    }
  }
  svg {
    margin-right: 14px;
    width: 30px;
    height: 30px;
  }
  p {
    color: ${({ theme }) => theme.colors.grey2};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 23px;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export const SignUpText = styled.div`
  margin: 62px 0 24px 0;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  span {
    color: #53b9e9;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export const MismatchInfo = styled.div`
  background-color: #ffe7e7;
  border-radius: 10px;
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  padding: 23px 17px 23px 28px;
  p {
    color: ${({ theme }) => theme.colors.grey2};
    font-weight: 300;
    font-size: 1rem;
    line-height: 20px;
  }
  svg {
    width: 60px;
    height: 28px;
    margin-right: 15px;
  }
`;
