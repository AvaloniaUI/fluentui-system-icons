import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PlayCircle16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm8.5 0a.5.5 0 00-.25-.44L7.62 6.08a.75.75 0 00-1.12.65v2.54c0 .58.62.94 1.12.65l2.63-1.48A.5.5 0 0010.5 8z" fill={primaryFill} /></svg>;
};

export default PlayCircle16Filled;