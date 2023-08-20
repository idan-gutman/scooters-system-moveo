import { SVGProps } from 'react';

const SvgBattery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 25 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect
      opacity={0.35}
      x={0.615}
      y={0.503}
      width={21}
      height={10.333}
      rx={2.167}
      stroke='#120D26'
    />
    <path
      opacity={0.4}
      d='M23.115 3.67v4a2.17 2.17 0 0 0 0-4Z'
      fill='#120D26'
    />
    <rect
      x={2.115}
      y={2.003}
      width={18}
      height={7.333}
      rx={1.333}
      fill='#120D26'
    />
  </svg>
);

export default SvgBattery;
