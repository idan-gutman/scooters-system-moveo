import { SVGProps } from 'react';

const SvgRain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 43 45'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#Rain_svg__a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.563 29.942h-9.481C4.52 29.942.013 25.434.013 19.874v-.294c0-5.399 4.377-9.775 9.775-9.775 1.719 0 3.333.444 4.737 1.222C16.217 5.144 21.64.84 28.068.84 35.85.84 42.16 7.15 42.16 14.93v.46c0 8.037-6.515 14.552-14.551 14.552h-8.045Z'
        fill='#fff'
      />
    </g>
    <path
      d='m32.815 33.159.37 1.87c.205 1.032-.38 2.132-1.305 2.455-.925.324-1.841-.25-2.046-1.283-.205-1.033.38-2.132 1.305-2.456l1.676-.586ZM22.959 33.159l.37 1.87c.205 1.032-.38 2.132-1.305 2.455-.925.324-1.841-.25-2.046-1.283-.205-1.033.38-2.132 1.305-2.456l1.675-.586ZM13.103 33.159l.37 1.87c.205 1.032-.38 2.132-1.305 2.455-.925.324-1.841-.25-2.046-1.283-.205-1.033.38-2.132 1.305-2.456l1.676-.586ZM3.676 33.159l.37 1.87c.205 1.032-.38 2.132-1.305 2.455-.925.324-1.841-.25-2.046-1.283-.205-1.033.38-2.132 1.305-2.456l1.676-.586ZM8.604 39.852l.37 1.87c.205 1.032-.379 2.131-1.304 2.455-.926.324-1.842-.25-2.047-1.283-.204-1.033.38-2.133 1.305-2.456l1.676-.586ZM17.228 39.852l.37 1.87c.205 1.032-.379 2.131-1.304 2.455-.926.324-1.842-.25-2.047-1.283-.204-1.033.38-2.133 1.305-2.456l1.676-.586ZM25.852 39.852l.37 1.87c.205 1.032-.379 2.131-1.304 2.455-.926.324-1.842-.25-2.047-1.283-.204-1.033.38-2.133 1.305-2.456l1.676-.586Z'
      fill='#fff'
    />
    <defs>
      <filter
        id='Rain_svg__a'
        x={-17.987}
        y={-14.161}
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
        <feBlend in2='shape' result='effect1_innerShadow_5401_4955' />
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
          in2='effect1_innerShadow_5401_4955'
          result='effect2_innerShadow_5401_4955'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgRain;
