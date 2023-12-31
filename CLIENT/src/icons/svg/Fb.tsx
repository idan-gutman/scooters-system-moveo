import { SVGProps } from 'react';

const SvgFb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M30 15c0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 7.487 5.485 13.692 12.656 14.818V19.336H8.848V15h3.808v-3.305c0-3.76 2.24-5.836 5.666-5.836 1.64 0 3.358.293 3.358.293v3.692h-1.892c-1.863 0-2.444 1.156-2.444 2.344V15h4.16l-.665 4.336h-3.495v10.482C24.514 28.692 30 22.487 30 15Z'
      fill='#1877F2'
    />
  </svg>
);

export default SvgFb;
