import { Fb, Google } from 'icons/svg/index';
import { SocialIcon, SocialWrapper } from './Login.style';

export const SocialMediaLogin = () => (
  <SocialWrapper>
    <SocialIcon>
      <Fb />
      <p>Log in with Facebook</p>
    </SocialIcon>
    <SocialIcon>
      <Google />
      <p>Log in with Google</p>
    </SocialIcon>
  </SocialWrapper>
);
