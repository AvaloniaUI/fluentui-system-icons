import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Autosum20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.81 3.7a.75.75 0 01.69-.45h11a.75.75 0 010 1.5H6.26l4.15 4.3c.26.28.28.72.03 1l-4.34 5.2h9.4a.75.75 0 010 1.5h-11a.75.75 0 01-.58-1.23l4.94-5.9-4.9-5.1a.75.75 0 01-.15-.81z" fill={primaryFill} /></svg>;
};

export default Autosum20Filled;