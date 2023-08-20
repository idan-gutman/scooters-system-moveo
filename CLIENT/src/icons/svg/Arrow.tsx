import { SVGProps } from 'react';

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.172 9H0V7h12.172L6.808 1.636 8.222.222 16 8l-7.778 7.778-1.414-1.414L12.172 9Z'
      fill='#444E72'
    />
  </svg>
);

export default SvgArrow;
