import { SVGProps } from 'react';

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m15.033 4.733-8.983 7c-1.5 1.167-2.717 3.65-2.717 5.534v12.35c0 3.866 3.15 7.033 7.017 7.033h19.3c3.867 0 7.017-3.167 7.017-7.017V17.5c0-2.017-1.35-4.6-3-5.75l-10.3-7.217c-2.334-1.633-6.084-1.55-8.334.2ZM20 29.983v-5'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SvgHome;
