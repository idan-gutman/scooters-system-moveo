import { SVGProps } from 'react';

const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M29.4 15.34c0-1.063-.095-2.085-.273-3.067H15v5.802h8.073c-.348 1.875-1.405 3.464-2.994 4.527v3.764h4.848c2.837-2.611 4.473-6.457 4.473-11.025Z'
      fill='#4285F4'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15 30c4.05 0 7.445-1.343 9.927-3.634l-4.848-3.764c-1.343.9-3.061 1.432-5.08 1.432-3.906 0-7.213-2.639-8.392-6.184H1.595v3.886C4.063 26.638 9.136 30 15 30Z'
      fill='#34A853'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.607 17.85c-.3-.9-.47-1.861-.47-2.85 0-.989.17-1.95.47-2.85V8.264H1.595A14.994 14.994 0 0 0 0 15c0 2.42.58 4.711 1.595 6.736l5.012-3.886Z'
      fill='#FBBC05'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15 5.966c2.202 0 4.18.757 5.734 2.243l4.302-4.302C22.438 1.487 19.043 0 15 0 9.136 0 4.063 3.361 1.595 8.264l5.012 3.886C7.787 8.605 11.093 5.966 15 5.966Z'
      fill='#EA4335'
    />
  </svg>
);

export default SvgGoogle;
