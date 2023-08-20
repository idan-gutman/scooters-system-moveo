import { SVGProps } from 'react';

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 131 83'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M43.235 82.932H28.692C12.846 82.932 0 70.086 0 54.24s12.846-28.692 28.692-28.692h1.573c5.562 0 10.773 1.5 15.252 4.118C51.339 12.42 67.651 0 86.863 0h2.162c22.901 0 41.466 18.565 41.466 41.466 0 22.902-18.565 41.467-41.466 41.467h-45.79Z'
      fill='#fff'
      fillOpacity={0.15}
    />
  </svg>
);

export default SvgCloud;
