import { SVGProps } from 'react';

const SvgCloudy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 49 31'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#Cloudy_svg__a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.068 29.926h-9.48c-5.562 0-10.07-4.507-10.07-10.068v-.294c0-5.398 4.377-9.775 9.775-9.775a9.73 9.73 0 0 1 4.737 1.223C16.723 5.128 22.145.824 28.573.824c7.783 0 14.091 6.308 14.091 14.09v.46c0 8.037-6.514 14.552-14.55 14.552h-8.046Z'
        fill='#fff'
      />
    </g>
    <g filter='url(#Cloudy_svg__b)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36.843 30.147h5.425a5.76 5.76 0 0 0 5.761-5.76v-.169a5.593 5.593 0 0 0-8.303-4.894 8.062 8.062 0 0 0-15.812 2.233v.264a8.326 8.326 0 0 0 8.327 8.326h4.602Z'
        fill='url(#Cloudy_svg__c)'
      />
    </g>
    <defs>
      <filter
        id='Cloudy_svg__a'
        x={-17.481}
        y={-14.176}
        width={68.146}
        height={55.103}
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
        <feBlend in2='shape' result='effect1_innerShadow_5401_4954' />
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
          in2='effect1_innerShadow_5401_4954'
          result='effect2_innerShadow_5401_4954'
        />
      </filter>
      <filter
        id='Cloudy_svg__b'
        x={5.915}
        y={-1.505}
        width={50.114}
        height={42.652}
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
        <feBlend in2='shape' result='effect1_innerShadow_5401_4954' />
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
          in2='effect1_innerShadow_5401_4954'
          result='effect2_innerShadow_5401_4954'
        />
      </filter>
      <radialGradient
        id='Cloudy_svg__c'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='rotate(167.116 24.47 10.702) scale(13.0559 13.3095)'
      >
        <stop stopColor='#FF4F4F' />
        <stop offset={1} />
      </radialGradient>
    </defs>
  </svg>
);

export default SvgCloudy;
