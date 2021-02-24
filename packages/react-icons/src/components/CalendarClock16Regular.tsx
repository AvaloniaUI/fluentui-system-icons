import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarClock16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v1.76A5.48 5.48 0 0010.5 5H13v-.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h7.5c-1.18 0-2.27.37-3.16 1H3v5.5c0 .83.67 1.5 1.5 1.5h1.1c.18.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7z" fill={primaryFill} /><path d="M10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM10 8.5a.5.5 0 011 0V10h1a.5.5 0 010 1h-1.5a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
};

export default CalendarClock16Regular;