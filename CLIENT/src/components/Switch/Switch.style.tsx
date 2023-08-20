import styled, { css } from 'styled-components';
import Switch from 'react-switch';
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri';
import { MdOutlineWbSunny } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';
import { ISwitchMode } from 'assets/Types/types';

export const SwitchWrapper = styled.div`
  display: flex;
  /* margin: 0 auto; */
  > :first-child {
    margin-right: 23px;
  }
`;

const SwitchStyle = css<ISwitchMode>`
  display: block !important;
  border: 1px solid #444e72 !important;
  .react-switch-handle {
    width: 30px !important;
    height: 30px !important;
    top: 4px !important;
    left: 2px !important;
  }
`;

export const DegreesSwitch = styled(Switch)`
  ${SwitchStyle}
`;

export const ModeSwitch = styled(Switch)`
  ${SwitchStyle}
`;

const SwitchSvgStyle = css`
  width: 26px;
  height: 26px;
  margin: 7px;
  color: ${({ theme }) => theme.colors.grey};
`;
export const Celsius = styled(RiCelsiusFill)`
  ${SwitchSvgStyle}
`;
export const Fahrenheit = styled(RiFahrenheitFill)`
  ${SwitchSvgStyle}
`;
export const LightSvg = styled(MdOutlineWbSunny)`
  ${SwitchSvgStyle}
`;
export const DarkSvg = styled(BsMoon)`
  ${SwitchSvgStyle}
  color: ${({ theme }) => theme.colors.white};
`;
