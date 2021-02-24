import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Attach16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.26 8.7l4.6-4.59a2.5 2.5 0 013.53 3.54l-5.3 5.3a1 1 0 01-1.42-1.41l5.3-5.3a.5.5 0 00-.7-.71l-5.3 5.3a2 2 0 102.82 2.83l5.3-5.3A3.5 3.5 0 007.16 3.4L2.55 8a.5.5 0 10.7.7z" fill={primaryFill} /></svg>;
};

export default Attach16Regular;