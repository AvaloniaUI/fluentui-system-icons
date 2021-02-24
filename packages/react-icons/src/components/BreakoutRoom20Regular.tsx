import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BreakoutRoom20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-3.35c.32-.29.6-.62.81-1H14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2.54c-.38.21-.71.49-1 .81V6z" fill={primaryFill} /><path d="M6 9a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3v-2a3 3 0 00-3-3H6zm-2 3c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" fill={primaryFill} /></svg>;
};

export default BreakoutRoom20Regular;