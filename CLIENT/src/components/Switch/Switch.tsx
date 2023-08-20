import { ISwitchMode } from 'assets/Types/types';
import useSession from 'hooks/useSession';
import * as Style from './Switch.style';

export const DegreesSwitchCmp = ({ $isHeader }: ISwitchMode) => {
  const { isCelsius, setIsCelsius } = useSession();

  return (
    <Style.DegreesSwitch
      height={38}
      width={73}
      onColor='#FFFFFF'
      offColor='#FFFFFF'
      onHandleColor='#838baa'
      offHandleColor='#838baa'
      onChange={() => setIsCelsius?.((prev) => !prev)}
      checked={isCelsius}
      checkedIcon={<Style.Celsius />}
      uncheckedIcon={<Style.Fahrenheit />}
      $isHeader={$isHeader}
    />
  );
};

export const ThemeModeSwitch = ({ $isHeader }: ISwitchMode) => {
  const { isLightTheme, setIsLightTheme } = useSession();

  return (
    <Style.ModeSwitch
      height={38}
      width={73}
      onColor='#FFFFFF'
      offColor='#444E72'
      onHandleColor='#838baa'
      offHandleColor='#FFFFFF'
      onChange={() => setIsLightTheme?.((prev) => !prev)}
      checked={isLightTheme}
      checkedIcon={<Style.LightSvg />}
      uncheckedIcon={<Style.DarkSvg />}
      $isHeader={$isHeader}
    />
  );
};
