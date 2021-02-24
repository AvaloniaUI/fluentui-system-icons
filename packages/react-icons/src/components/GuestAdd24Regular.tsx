import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GuestAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 2c1.16 0 2.11.88 2.24 2h1.76c1.2 0 2.17.93 2.24 2.1l.01.15v4.92a6.52 6.52 0 00-1.5-.17V6.25c0-.38-.28-.7-.65-.74l-.1-.01h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.46-.4-1.87-1H5.25c-.38 0-.7.28-.74.65l-.01.1v13.5c0 .38.28.7.65.75h6.58c.3.56.66 1.06 1.08 1.5H5.25c-1.2 0-2.17-.92-2.24-2.1L3 19.76V6.25c0-1.2.93-2.17 2.1-2.24L5.25 4h1.76c.13-1.12 1.08-2 2.24-2h3.5zm0 1.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 100-1.5z" fill={primaryFill} /><path d="M8.25 14h3.77c-.3.46-.53.96-.7 1.5H8.5v.24c0 .83.7 1.26 2.5 1.26h.02a6.6 6.6 0 00.06 1.5H11c-2.53 0-4-.91-4-2.76v-.5c0-.68.56-1.24 1.25-1.24z" fill={primaryFill} /><path d="M11 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
};

export default GuestAdd24Regular;