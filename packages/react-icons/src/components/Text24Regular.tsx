import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Text24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.75c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v2a.75.75 0 01-1.5 0V5.5h-4.75v13h1.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h1.5v-13H6.5v1.25a.75.75 0 01-1.5 0v-2z" fill={primaryFill} /></svg>;
};

export default Text24Regular;