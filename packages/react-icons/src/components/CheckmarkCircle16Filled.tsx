import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkCircle16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm2.12 4.16L7.25 9.04l-1.4-1.4a.5.5 0 10-.7.71L6.9 10.1c.2.2.5.2.7 0l3.23-3.23a.5.5 0 00-.71-.7z" fill={primaryFill} /></svg>;
};

export default CheckmarkCircle16Filled;