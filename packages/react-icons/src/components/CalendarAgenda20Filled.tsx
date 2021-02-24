import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarAgenda20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zm-3-8a.5.5 0 00-.41-.5H6.41a.5.5 0 000 1h7.18a.5.5 0 00.41-.5zm0 3.5a.5.5 0 00-.41-.5H6.41a.5.5 0 000 1h7.18A.5.5 0 0014 10zm0 3.5a.5.5 0 00-.41-.5H6.41a.5.5 0 000 1h7.18a.5.5 0 00.41-.5z" fill={primaryFill} /></svg>;
};

export default CalendarAgenda20Filled;