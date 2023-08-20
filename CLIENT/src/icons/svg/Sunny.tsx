import { SVGProps } from 'react';

const SvgSunny = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 27 29'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M26.23 14.235c0 7.526-5.606 13.555-12.437 13.555-6.83 0-12.436-6.03-12.436-13.555C1.357 6.709 6.964.68 13.794.68c6.83 0 12.436 6.029 12.436 13.555Z'
      fill='url(#Sunny_svg__a)'
      stroke='#F1B04E'
    />
    <defs>
      <radialGradient
        id='Sunny_svg__a'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(-18.08312 21.71636 -21.46453 -17.87342 18.94 6.573)'
      >
        <stop stopColor='#FFF72C' />
        <stop offset={1} stopColor='#DF7800' />
      </radialGradient>
    </defs>
  </svg>
);

export default SvgSunny;
