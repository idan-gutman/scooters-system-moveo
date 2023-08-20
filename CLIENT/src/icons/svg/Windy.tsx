import { SVGProps } from 'react';

const SvgWindy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 46 46'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#Windy_svg__a)' fill='#fff'>
      <path d='M35.459 43.604c-4.486 0-8.146-3.66-8.146-8.146V34.5c0-.786.651-1.438 1.437-1.438s1.438.652 1.438 1.438v.958a5.268 5.268 0 0 0 5.27 5.271 5.268 5.268 0 0 0 5.271-5.27 5.268 5.268 0 0 0-5.27-5.272H3.832a1.448 1.448 0 0 1-1.437-1.437c0-.786.652-1.438 1.438-1.438h31.625c4.484 0 8.145 3.661 8.145 8.146 0 4.485-3.66 8.146-8.145 8.146ZM35.459 24.437H3.832A1.448 1.448 0 0 1 2.397 23c0-.786.652-1.438 1.438-1.438h31.625a5.268 5.268 0 0 0 5.27-5.27 5.268 5.268 0 0 0-5.27-5.271 5.268 5.268 0 0 0-5.271 5.27v.959c0 .786-.652 1.437-1.438 1.437a1.448 1.448 0 0 1-1.437-1.437v-.958c0-4.485 3.66-8.146 8.146-8.146 4.484 0 8.145 3.66 8.145 8.146 0 4.485-3.66 8.145-8.145 8.145Z' />
      <path d='M17.844 18.688H3.834a1.448 1.448 0 0 1-1.438-1.438c0-.786.652-1.437 1.438-1.437h14.01a3.722 3.722 0 0 0 3.719-3.719 3.722 3.722 0 0 0-3.719-3.718 3.722 3.722 0 0 0-3.718 3.718v.729c0 .785-.652 1.437-1.438 1.437a1.436 1.436 0 0 1-1.437-1.437v-.729a6.593 6.593 0 1 1 13.187 0 6.593 6.593 0 0 1-6.594 6.594Z' />
    </g>
    <defs>
      <filter
        id='Windy_svg__a'
        x={-18}
        y={-15}
        width={72}
        height={72}
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
        <feBlend in2='shape' result='effect1_innerShadow_1289_4744' />
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
          in2='effect1_innerShadow_1289_4744'
          result='effect2_innerShadow_1289_4744'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgWindy;
