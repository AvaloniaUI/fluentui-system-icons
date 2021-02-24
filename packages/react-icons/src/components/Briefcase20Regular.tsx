import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Briefcase20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3a.5.5 0 00-.5.5V6H5.5A2.5 2.5 0 003 8.5v5A2.5 2.5 0 005.5 16h9a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0014.5 6H13V3.5a.5.5 0 00-.5-.5h-5zM12 6H8V4h4v2zM5.5 7h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 13.5v-5C4 7.67 4.67 7 5.5 7z" fill={primaryFill} /></svg>;
};

export default Briefcase20Regular;