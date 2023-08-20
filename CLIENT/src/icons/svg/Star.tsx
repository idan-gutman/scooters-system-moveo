import { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 30 31'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g
      filter='url(#star_svg__a)'
      stroke='#FEFEFF'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m22.172 4.83-.082 4.422c-.012.606.373 1.412.863 1.773l2.894 2.194c1.855 1.4 1.551 3.115-.665 3.815l-3.769 1.178c-.63.198-1.295.887-1.458 1.528l-.898 3.43c-.712 2.707-2.485 2.975-3.955.595l-2.054-3.325c-.373-.607-1.26-1.062-1.96-1.027l-3.896.199c-2.789.14-3.582-1.47-1.762-3.593l2.31-2.684c.432-.502.63-1.435.432-2.065L6.993 7.502c-.688-2.217.549-3.442 2.754-2.719l3.441 1.132c.584.187 1.459.058 1.949-.303l3.593-2.59c1.937-1.4 3.488-.584 3.442 1.808ZM27.562 25.667l-3.535-3.535' />
    </g>
    <defs>
      <filter
        id='star_svg__a'
        x={-1}
        y={0}
        width={31}
        height={32}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={-2} dy={3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_4848_1661'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_4848_1661'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgStar;
