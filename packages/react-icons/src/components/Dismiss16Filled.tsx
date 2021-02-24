import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dismiss16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.4 2.55l.07-.08a.75.75 0 01.98-.07l.08.07L8 6.94l4.47-4.47a.75.75 0 111.06 1.06L9.06 8l4.47 4.47c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07L8 9.06l-4.47 4.47a.75.75 0 01-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
};

export default Dismiss16Filled;