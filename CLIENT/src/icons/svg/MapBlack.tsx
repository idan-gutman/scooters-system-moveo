import { SVGProps } from 'react';

const SvgMapBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.63 3.57c.18-.098.37.053.37.257v13.556c0 .223-.152.412-.35.516a1.448 1.448 0 0 0-.02.011l-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73l4.33-2.48ZM14.722 6.102A.5.5 0 0 1 15 6.55v13.154a.5.5 0 0 1-.717.45l-4.25-2.047a.5.5 0 0 1-.283-.451V4.446a.5.5 0 0 1 .722-.448l4.25 2.104ZM22 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-3.491 2.001a.5.5 0 0 1-.749-.434V6.33a.5.5 0 0 1 .252-.434L19.01 4.75C20.65 3.81 22 4.59 22 6.49Z'
      fill='#292D32'
    />
  </svg>
);

export default SvgMapBlack;
