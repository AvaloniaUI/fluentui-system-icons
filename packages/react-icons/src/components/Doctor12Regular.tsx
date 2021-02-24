import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 011-1h2a1 1 0 011 1v1h1a1 1 0 011 1v2a1 1 0 01-1 1H8v1a1 1 0 01-1 1H5a1 1 0 01-1-1V8H3a1 1 0 01-1-1V5a1 1 0 011-1h1V3zm3 0H5v1.5a.5.5 0 01-.5.5H3v2h1.5c.28 0 .5.22.5.5V9h2V7.5c0-.28.22-.5.5-.5H9V5H7.5a.5.5 0 01-.5-.5V3z" fill={primaryFill} /></svg>;
};

export default Doctor12Regular;