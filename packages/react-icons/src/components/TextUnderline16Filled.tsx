import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextUnderline16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 13.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" /><path d="M4.75 2c.41 0 .75.34.75.75V8a2.5 2.5 0 105 0V2.75a.75.75 0 011.5 0V8a4 4 0 11-8 0V2.75c0-.41.34-.75.75-.75z" /></svg>;
};

export default TextUnderline16Filled;