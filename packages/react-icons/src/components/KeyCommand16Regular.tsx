import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyCommand16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4v1h4V4a2 2 0 112 2h-1v4h1a2 2 0 11-2 2v-1H6v1a2 2 0 11-2-2h1V6H4a2 2 0 112-2zM5 5V4a1 1 0 10-1 1h1zm5 5V6H6v4h4zm1 1v1a1 1 0 101-1h-1zm1-6a1 1 0 10-1-1v1h1zm-7 6H4a1 1 0 101 1v-1z" fill={primaryFill} /></svg>;
};

export default KeyCommand16Regular;