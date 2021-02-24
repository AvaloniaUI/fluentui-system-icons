import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BorderTop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 002 0 1 1 0 011-1h12a1 1 0 011 1 1 1 0 102 0 3 3 0 00-3-3H6a3 3 0 00-3 3z" fill={primaryFill} /><path d="M5 11a1 1 0 10-2 0v2a1 1 0 102 0v-2z" fill={primaryFill} /><path d="M19 11a1 1 0 112 0v2a1 1 0 11-2 0v-2z" fill={primaryFill} /><path d="M14 20a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1z" fill={primaryFill} /><path d="M6 21a1 1 0 100-2 1 1 0 01-1-1 1 1 0 10-2 0 3 3 0 003 3z" fill={primaryFill} /><path d="M17 20a1 1 0 001 1 3 3 0 003-3 1 1 0 10-2 0 1 1 0 01-1 1 1 1 0 00-1 1z" fill={primaryFill} /></svg>;
};

export default BorderTop24Filled;