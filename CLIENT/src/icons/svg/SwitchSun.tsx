import { SVGProps } from 'react';

const SvgSwitchSun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 28 29'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g
      filter='url(#SwitchSun_svg__a)'
      stroke='#444E72'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        d='M15 20.042a7.042 7.042 0 1 0 0-14.083 7.042 7.042 0 0 0 0 14.083Z'
        strokeWidth={1.5}
      />
      <path
        d='m22.735 20.735-.14-.141m0-15.188.14-.141-.14.14ZM7.264 20.735l.14-.141-.14.14ZM15 2.253v-.087.087Zm0 21.58v-.086.086ZM4.253 13h-.086.086Zm21.58 0h-.086.086ZM7.406 5.406l-.141-.141.14.14Z'
        strokeWidth={2}
      />
    </g>
    <defs>
      <filter
        id='SwitchSun_svg__a'
        x={0.167}
        y={1.167}
        width={26.667}
        height={27.666}
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
          result='effect1_dropShadow_181_2483'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_181_2483'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSwitchSun;
