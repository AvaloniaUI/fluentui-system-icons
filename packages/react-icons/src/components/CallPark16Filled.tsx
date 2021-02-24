import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallPark16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2a.5.5 0 00-.5.5v5a.5.5 0 001 0V6h1a2 2 0 100-4h-1.5zM12 5h-1V3h1a1 1 0 110 2z" fill={primaryFill} /><path d="M4.37 2.12c.86-.32 1.8.06 2.2.89l.57 1.19c.26.55.16 1.2-.25 1.65L5.57 7.3a4.8 4.8 0 001.35 2.29l1.88-.5a1.5 1.5 0 011.46.42l.78.8c.67.71.64 1.83-.06 2.5l-.3.27c-1.13 1.06-2.88 1.3-4.13.25a14.37 14.37 0 01-2.92-3.21 12.17 12.17 0 01-1.59-4.55 3.1 3.1 0 012.07-3.34l.26-.1z" fill={primaryFill} /></svg>;
};

export default CallPark16Filled;