import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3C7.67 3 7 3.67 7 4.5V7H4.5C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5H7v2.5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V13h2.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13V4.5c0-.83-.67-1.5-1.5-1.5h-3z" fill={primaryFill} /></svg>;
};

export default Doctor20Filled;