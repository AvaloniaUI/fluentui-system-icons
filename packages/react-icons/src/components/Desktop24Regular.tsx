import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Desktop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 22a.75.75 0 01-.1-1.5H8.5V18H4.25c-1.2 0-2.17-.92-2.24-2.1L2 15.76V5.25c0-1.2.93-2.17 2.1-2.24L4.25 3h15.5c1.19 0 2.16.93 2.24 2.1v10.65c0 1.2-.92 2.17-2.09 2.25h-4.4v2.5h1.75a.75.75 0 01.1 1.5H6.75zM14 18h-4v2.5h4V18zm5.75-13.5H4.25c-.38 0-.7.28-.74.65l-.01.1v10.5c0 .38.28.7.65.75h15.6c.38 0 .7-.28.74-.65V5.25c0-.38-.27-.7-.64-.74l-.1-.01z" fill={primaryFill} /></svg>;
};

export default Desktop24Regular;