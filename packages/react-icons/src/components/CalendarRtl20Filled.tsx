import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarRtl20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9zM3 7h14v7.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5V7zm9 3a1 1 0 102 0 1 1 0 00-2 0zm1 4a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 102 0 1 1 0 00-2 0zm1 4a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
};

export default CalendarRtl20Filled;