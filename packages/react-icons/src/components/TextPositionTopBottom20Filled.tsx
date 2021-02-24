import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextPositionTopBottom20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M2.75 15.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M7.75 8.5a2.25 2.25 0 014.5 0v5a.75.75 0 001.5 0v-5a3.75 3.75 0 10-7.5 0v5a.75.75 0 001.5 0v-5z" fill={primaryFill} /></svg>;
};

export default TextPositionTopBottom20Filled;