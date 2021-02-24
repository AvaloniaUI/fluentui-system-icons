import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Laptop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 16.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zM18.25 5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H5.75C4.78 16 4 15.22 4 14.25v-7.5C4 5.78 4.78 5 5.75 5h12.5z" fill={primaryFill} /></svg>;
};

export default Laptop24Filled;