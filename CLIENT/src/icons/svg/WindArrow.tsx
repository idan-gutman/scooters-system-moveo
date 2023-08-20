import { SVGProps } from 'react';

const SvgWindArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m10.126 18.642-1.065-2.44a2.362 2.362 0 0 0-1.612-1.345l-2.596-.617c-2.218-.524-2.464-3.59-.352-4.456l1.106-.45a.68.68 0 0 1 .478-.028l9.138 2.56a.736.736 0 0 1 .52.86L14.567 18.2c-.47 2.228-3.53 2.532-4.442.443ZM15.343 10.878 9.36 9.206c-.673-.187-.728-1.124-.081-1.386l4.126-1.697c1.752-.721 3.59.813 3.193 2.666l-.333 1.54a.74.74 0 0 1-.922.55Z'
      fill='#fff'
    />
  </svg>
);

export default SvgWindArrow;
