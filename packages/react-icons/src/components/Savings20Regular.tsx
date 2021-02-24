import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Savings20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.95 9.54c.03.24.05.5.05.77 0 1.53-.46 2.56-.91 3.2a3.96 3.96 0 01-.85.89.5.5 0 00-.24.43v1.67a.5.5 0 01-.5.5h-1.38a.12.12 0 01-.12-.12c0-.61-.5-1.11-1.12-1.11h-1.76c-.62 0-1.12.5-1.12 1.11 0 .07-.05.12-.12.12H7.5a.5.5 0 01-.5-.5v-.85a.5.5 0 00-.34-.47l-.04-.02a6.37 6.37 0 01-1.26-1.01 4.99 4.99 0 01-1-1.49c-.19-.42-.57-.8-1.09-.88a.33.33 0 01-.27-.32V9.95c0-.14.1-.26.24-.29.55-.09.94-.51 1.1-.97.12-.4.36-.93.75-1.32a5.64 5.64 0 011.58-1.1l.02-.02A.5.5 0 007 5.79v-2.1c.25.22.55.46.87.67.43.3.95.56 1.48.66.12-.33.28-.65.48-.94l-.18-.02a2.9 2.9 0 01-1.23-.53 8.47 8.47 0 01-1.11-.92.77.77 0 00-.83-.15.76.76 0 00-.48.7v2.32a6.9 6.9 0 00-1.63 1.19 4.4 4.4 0 00-.99 1.7c-.06.18-.19.29-.3.3A1.3 1.3 0 002 9.96v1.5c0 .66.47 1.2 1.1 1.32.13.02.27.12.34.3.2.45.58 1.15 1.2 1.78A7.34 7.34 0 006 15.96v.54c0 .83.67 1.5 1.5 1.5h1.38c.62 0 1.12-.5 1.12-1.12 0-.06.05-.11.12-.11h1.76c.07 0 .12.05.12.11 0 .62.5 1.12 1.12 1.12h1.38c.83 0 1.5-.67 1.5-1.5v-1.42c.04-.03.1-.07.14-.12.22-.2.5-.48.77-.87A6.48 6.48 0 0018 10.3c0-.73-.1-1.38-.3-1.96-.18.43-.43.84-.75 1.2z" fill={primaryFill} /><path d="M16.8 5.23a3.5 3.5 0 01-1.17 4.17c-.43.31-1 .29-1.49.09L11.1 8.23c-.49-.2-.9-.6-.99-1.12a3.5 3.5 0 016.7-1.88zM15.04 8.6a2.5 2.5 0 10-3.94-1.63c0 .03.03.08.09.15.06.06.16.14.3.2l3.04 1.25c.13.06.26.08.35.08.09 0 .13-.03.16-.05z" fill={primaryFill} /><path d="M6.75 9.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
};

export default Savings20Regular;