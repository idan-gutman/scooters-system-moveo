import { SVGProps } from 'react';

const SvgConnection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 17 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.957.336h-.997a.999.999 0 0 0-.997 1v8.667c0 .552.446 1 .997 1h.997c.551 0 .998-.448.998-1V1.336c0-.552-.447-1-.998-1Zm-5.651 2.333h.997c.551 0 .998.448.998 1v6.334c0 .552-.447 1-.998 1h-.997a.999.999 0 0 1-.997-1V3.669c0-.552.446-1 .997-1ZM6.649 5.003h-.997a.999.999 0 0 0-.998 1v4c0 .552.447 1 .998 1h.997c.55 0 .997-.448.997-1v-4c0-.553-.446-1-.997-1Zm-4.654 2H.997a.999.999 0 0 0-.997 1v2c0 .552.447 1 .997 1h.998c.55 0 .997-.448.997-1v-2c0-.553-.446-1-.997-1Z'
      fill='#120D26'
    />
  </svg>
);

export default SvgConnection;
