import { SVGProps } from 'react';

const SvgMapLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M26.25 20.313h-7.5a.944.944 0 0 1-.938-.938c0-.512.425-.938.938-.938h7.5c.512 0 .938.425.938.938a.944.944 0 0 1-.938.938ZM26.25 25.313h-7.5a.944.944 0 0 1-.938-.938c0-.512.425-.938.938-.938h7.5c.512 0 .938.425.938.938a.944.944 0 0 1-.938.938ZM27.5 10.65V4.975c0-1.762-.8-2.475-2.788-2.475h-5.05c-1.987 0-2.787.712-2.787 2.475v5.662c0 1.775.8 2.476 2.788 2.476h5.05c1.987.012 2.787-.7 2.787-2.463ZM13.125 10.65V4.975c0-1.762-.8-2.475-2.787-2.475h-5.05C3.3 2.5 2.5 3.212 2.5 4.975v5.662c0 1.775.8 2.476 2.787 2.476h5.05c1.988.012 2.788-.7 2.788-2.463ZM13.125 24.712v-5.05c0-1.987-.8-2.787-2.787-2.787h-5.05c-1.988 0-2.788.8-2.788 2.788v5.05c0 1.987.8 2.787 2.787 2.787h5.05c1.988 0 2.788-.8 2.788-2.788Z'
      fill='#fff'
    />
  </svg>
);

export default SvgMapLayout;