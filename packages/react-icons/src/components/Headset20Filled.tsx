import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Headset20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a6 6 0 00-6 6v6a3 3 0 003 3h1.27A2 2 0 108 16H7a2 2 0 01-2-2v-1h2a1 1 0 001-1V9a1 1 0 00-1-1H5a5 5 0 0110 0h-2a1 1 0 00-1 1v3a1 1 0 001 1h1a2 2 0 002-2V8a6 6 0 00-6-6z" fill={primaryFill} /></svg>;
};

export default Headset20Filled;