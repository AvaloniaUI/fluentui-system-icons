import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarSync16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h1.76a5.5 5.5 0 01-.66-1H4.5A1.5 1.5 0 013 11.5V6h4.34a5.47 5.47 0 016.32 0H14V4.5zm-3.5.5H3v-.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V5h-2.5z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.5-3A.5.5 0 008 8v1.5c0 .28.22.5.5.5H10a.5.5 0 000-1h-.47a2 2 0 012.38.34.5.5 0 10.71-.71A3 3 0 009 8.15V8a.5.5 0 00-.5-.5zm.88 5.53a3 3 0 002.62-.18V13a.5.5 0 001 0v-1.5a.5.5 0 00-.5-.5H11a.5.5 0 000 1h.47a1.97 1.97 0 01-.94.25 2 2 0 01-1.44-.59.5.5 0 00-.71.71 3 3 0 001 .66z" fill={primaryFill} /></svg>;
};

export default CalendarSync16Regular;