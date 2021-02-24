import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Prohibited48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 5a19 19 0 110 38 19 19 0 010-38zm12.52 8.25L13.25 36.52a16.5 16.5 0 0023.27-23.27zM24 7.5a16.5 16.5 0 00-12.52 27.25l23.27-23.27A16.44 16.44 0 0024 7.5z" fill={primaryFill} /></svg>;
};

export default Prohibited48Regular;