import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Handshake16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.2 2a.5.5 0 00-.37.18l-.06.04a4.56 4.56 0 00-4.4 1.02 4 4 0 00-1.21 3.68l-.02.01-.67.64a1.35 1.35 0 000 1.98c.35.32.81.45 1.26.4.06.23.2.45.39.63.26.25.6.38.93.4.03.33.17.64.43.9.26.24.6.37.94.4.03.32.17.64.43.89.53.5 1.37.54 1.95.12l.33.31c.58.55 1.52.55 2.1 0 .26-.25.4-.56.43-.88.34-.03.67-.16.93-.4.26-.26.4-.57.43-.9.34-.02.67-.15.92-.4.2-.19.34-.42.4-.67.44.06.9-.08 1.23-.4.58-.54.58-1.43 0-1.97l-.6-.57.12-.42c.26-.97.13-2-.37-2.88A4.23 4.23 0 0010.03 2H8.21zm4.38 5.46l.48.48a.5.5 0 00.1.08l.69.64c.17.17.17.44 0 .6a.47.47 0 01-.65 0L12.07 8.2a.53.53 0 00-.73 0l-.01.01c-.2.2-.2.5 0 .69l.89.84c.17.17.17.44 0 .6a.47.47 0 01-.6.05.54.54 0 00-.67.04.47.47 0 00-.04.64c.13.17.12.41-.04.56a.47.47 0 01-.6.04.54.54 0 00-.68.04.47.47 0 00-.05.64c.14.17.13.42-.04.57a.48.48 0 01-.65 0l-.32-.3.09-.08c.57-.55.57-1.43 0-1.98-.27-.25-.6-.38-.94-.4a1.36 1.36 0 00-.43-.9c-.26-.24-.6-.38-.94-.4a1.36 1.36 0 00-.43-.89 1.53 1.53 0 00-1.26-.4c-.06-.23-.19-.45-.38-.63-.3-.29-.7-.42-1.1-.4-.11-.93.2-1.9.96-2.6.7-.67 1.65-.98 2.58-.92l-1.1.79a1.5 1.5 0 00-.3 2.18c.55.66 1.53.8 2.23.3l1.35-.98h1.44l2.28 2.16zM6.17 4.61L8.39 3h.49A1.84 1.84 0 019 3h1.03c1.2 0 2.27.62 2.82 1.59.35.62.46 1.34.3 2.03l-2.21-2.18a.5.5 0 00-.35-.15h-1.9a.5.5 0 00-.29.1L6.92 5.46a.64.64 0 01-.85-.11.5.5 0 01.1-.74zm1.08 6.63a.47.47 0 01.64 0c.18.16.18.44 0 .6l-.67.64a.47.47 0 01-.64 0 .41.41 0 010-.6l.67-.64zm-.73-.7l-.67.64a.47.47 0 01-.64 0 .41.41 0 01-.01-.6h.01l.67-.64h.01a.47.47 0 01.63 0c.18.17.18.44 0 .6zM5.15 9.27l-.67.63v.01a.47.47 0 01-.64 0 .41.41 0 010-.61l.67-.64a.47.47 0 01.64 0c.18.16.18.43.02.6h-.02zM3.51 8.22l-.67.64a.47.47 0 01-.64 0 .41.41 0 010-.6l.67-.64a.47.47 0 01.64 0c.18.17.18.44 0 .6z" fill={primaryFill} /></svg>;
};

export default Handshake16Regular;