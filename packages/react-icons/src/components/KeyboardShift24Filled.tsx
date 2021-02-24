import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardShift24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.88 2.47c-.08.06-.16.14-.22.22l-7.87 9.44c-.62.74-.52 1.85.22 2.46l.14.1c.3.2.63.3.99.3H7v5.26c0 .97.78 1.75 1.75 1.75h6.64c.9-.08 1.61-.83 1.61-1.75V15h2.86a1.75 1.75 0 001.35-2.87l-7.87-9.44c-.58-.7-1.6-.83-2.33-.32l-.13.1z" fill={primaryFill} /></svg>;
};

export default KeyboardShift24Filled;