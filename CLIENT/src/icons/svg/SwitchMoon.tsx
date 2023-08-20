import { SVGProps } from 'react';

const SvgSwitchMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1.03 11.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C12 15.06 8 10.97 7.98 6.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C3.41 2.86.7 6.85 1.03 11.42Z'
      stroke='#444E72'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SvgSwitchMoon;
