import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUp20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.2 8.73a.75.75 0 001.1 1.04l4.95-5.24v12.72a.75.75 0 001.5 0V4.52l4.95 5.25a.75.75 0 001.1-1.04l-6.08-6.41a1 1 0 00-1.45 0L3.2 8.73z" fill={primaryFill} /></svg>;
};

export default ArrowUp20Filled;