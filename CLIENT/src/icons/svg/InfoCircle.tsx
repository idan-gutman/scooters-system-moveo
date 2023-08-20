import { SVGProps } from 'react';

const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 29 29'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M16.333 24.333C22.75 24.333 28 19.083 28 12.667 28 6.25 22.75 1 16.333 1 9.917 1 4.667 6.25 4.667 12.667c0 6.416 5.25 11.666 11.666 11.666ZM16.333 8v5.833'
      stroke='#FF1741'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.327 17.333h.01'
      stroke='#FF1741'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SvgInfoCircle;
