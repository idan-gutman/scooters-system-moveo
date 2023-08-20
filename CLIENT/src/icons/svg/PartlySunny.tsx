import { SVGProps } from 'react';

const SvgPartlySunny = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 42 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <ellipse
      cx={11.766}
      cy={9.293}
      rx={7.819}
      ry={8.496}
      fill='url(#PartlySunny_svg__a)'
    />
    <g filter='url(#PartlySunny_svg__b)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.236 29.516h-9.78a9.11 9.11 0 0 1 0-18.22h.335c1.72 0 3.332.46 4.72 1.264 1.783-5.443 6.904-9.375 12.943-9.375h.45c7.271 0 13.166 5.894 13.166 13.165 0 7.271-5.895 13.166-13.166 13.166h-8.668Z'
        fill='#fff'
      />
    </g>
    <defs>
      <radialGradient
        id='PartlySunny_svg__a'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='rotate(129.784 6.346 5.817) scale(17.0816 16.8835)'
      >
        <stop stopColor='#FFF72C' />
        <stop offset={1} stopColor='#DF7800' />
      </radialGradient>
      <filter
        id='PartlySunny_svg__b'
        x={-17.654}
        y={-11.815}
        width={66.724}
        height={52.331}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={8} dy={-15} />
        <feGaussianBlur stdDeviation={15} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0' />
        <feBlend in2='shape' result='effect1_innerShadow_5401_4956' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={-18} dy={11} />
        <feGaussianBlur stdDeviation={15} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
        <feBlend
          in2='effect1_innerShadow_5401_4956'
          result='effect2_innerShadow_5401_4956'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgPartlySunny;
