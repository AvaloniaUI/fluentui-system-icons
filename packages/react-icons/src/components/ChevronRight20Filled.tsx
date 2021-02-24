import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.73 4.2a.75.75 0 011.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 11-1.08-1.04L12.2 10l-4.5-4.73a.75.75 0 01.02-1.06z" fill={primaryFill} /></svg>;
};

export default ChevronRight20Filled;