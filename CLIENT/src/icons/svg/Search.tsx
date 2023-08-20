import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 32 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g
      filter='url(#search_svg__a)'
      stroke='#444E72'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16.375 26.25c6.558 0 11.875-5.317 11.875-11.875S22.933 2.5 16.375 2.5 4.5 7.817 4.5 14.375 9.817 26.25 16.375 26.25ZM29.5 27.5 27 25' />
    </g>
    <defs>
      <filter
        id='search_svg__a'
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
          result='effect1_dropShadow_4672_3775'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_4672_3775'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSearch;
