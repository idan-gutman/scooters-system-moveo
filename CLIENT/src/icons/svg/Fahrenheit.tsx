import { SVGProps } from 'react';

const SvgFahrenheit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 115 114'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#Fahrenheit_svg__a)'>
      <path
        d='M45.45 68V50.5h10.525v2.05h-8.35v5.375h5.525v2.05h-5.525V68H45.45Z'
        fill='#444E72'
      />
    </g>
    <g filter='url(#Fahrenheit_svg__b)'>
      <path
        d='M63.232 50.984c-.533.523-1.184.784-1.952.784a2.738 2.738 0 0 1-1.968-.784c-.533-.523-.8-1.168-.8-1.936 0-.779.267-1.424.8-1.936.533-.523 1.19-.784 1.968-.784.779 0 1.43.261 1.952.784.533.512.8 1.157.8 1.936 0 .768-.267 1.413-.8 1.936Zm-1.952-.528c.384 0 .699-.133.944-.4.256-.267.384-.603.384-1.008 0-.416-.128-.752-.384-1.008-.245-.267-.56-.4-.944-.4-.384 0-.71.133-.976.4-.256.267-.384.603-.384 1.008 0 .395.133.73.4 1.008.267.267.587.4.96.4Z'
        fill='#444E72'
      />
    </g>
    <defs>
      <filter
        id='Fahrenheit_svg__a'
        x={42.45}
        y={50.5}
        width={13.525}
        height={21.5}
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
          result='effect1_dropShadow_185_4190'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_185_4190'
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
        <feBlend in2='shape' result='effect2_innerShadow_185_4190' />
      </filter>
      <filter
        id='Fahrenheit_svg__b'
        x={0.512}
        y={0.328}
        width={113.52}
        height={113.44}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={4}
          operator='dilate'
          in='SourceAlpha'
          result='effect1_dropShadow_185_4190'
        />
        <feOffset dx={-4} dy={8} />
        <feGaussianBlur stdDeviation={25} />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_185_4190'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_185_4190'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgFahrenheit;
