import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Briefcase20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 3.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h1.5A2.5 2.5 0 0117 8.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 13.5v-5A2.5 2.5 0 015.5 6H7V3.5zM12 6V4H8v2h4z" fill={primaryFill} /></svg>;
};

export default Briefcase20Filled;