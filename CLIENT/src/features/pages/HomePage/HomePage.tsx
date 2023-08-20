import {
  Wrapper
} from 'assets/styles/common-styles/common.style';
import { breakpoints } from 'assets/styles/theme';
import ScooterManagement from 'features/Scooters/ScooterManagement';
import useMediaQuery from 'hooks/useMediaQuery';

export const HomePage = () => {
  const isMobile = useMediaQuery(`(${breakpoints.mobile})`);

  return (
    <Wrapper>
      <ScooterManagement />
    </Wrapper>
  );
};
