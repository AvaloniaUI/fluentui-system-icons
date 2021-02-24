import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Desktop32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4a4 4 0 00-4 4v11.98a4 4 0 004 4h4.01V26h-3a1 1 0 100 2h14a1 1 0 100-2h-3v-2.02H24a4 4 0 004-4V8a4 4 0 00-4-4H8zm10 19.98V26h-3.99v-2.02h4zM6 8c0-1.1.9-2 2-2h16a2 2 0 012 2v11.98a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" fill={primaryFill} /></svg>;
};

export default Desktop32Regular;