import { SVGProps } from 'react';

const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 32 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g
      filter='url(#searchIcon_svg__a)'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16.375 26.25c6.558 0 11.875-5.317 11.875-11.875S22.933 2.5 16.375 2.5 4.5 7.817 4.5 14.375 9.817 26.25 16.375 26.25ZM29.5 27.5 27 25' />
    </g>
    <defs>
      <filter
        id='searchIcon_svg__a'
        x={-1}
        y={0}
        width={33}
        height={34}
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
          result='effect1_dropShadow_5292_1805'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_5292_1805'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect2_innerShadow_5292_1805' />
      </filter>
    </defs>
  </svg>
);

export default SvgSearchIcon;
