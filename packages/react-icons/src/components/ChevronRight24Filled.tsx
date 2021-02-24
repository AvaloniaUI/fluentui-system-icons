import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 4.3a1 1 0 000 1.4l6.29 6.3-6.3 6.3a1 1 0 101.42 1.4l7-7a1 1 0 000-1.4l-7-7a1 1 0 00-1.42 0z" fill={primaryFill} /></svg>;
};

export default ChevronRight24Filled;