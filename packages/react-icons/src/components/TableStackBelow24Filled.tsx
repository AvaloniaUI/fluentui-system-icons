import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableStackBelow24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 9.5v5h5v-5h-5z" fill={primaryFill} /><path d="M8 9.5v5H3.75a.75.75 0 01-.75-.75V9.5h5z" fill={primaryFill} /><path d="M9.5 8h5V3h-5v5z" fill={primaryFill} /><path d="M16 9.5v5h4.25c.41 0 .75-.34.75-.75V9.5h-5z" fill={primaryFill} /><path d="M21 8h-5V3h1.75C19.55 3 21 4.46 21 6.25V8z" fill={primaryFill} /><path d="M8 8H3V6.25C3 4.45 4.46 3 6.25 3H8v5z" fill={primaryFill} /><path d="M3.75 19.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /></svg>;
};

export default TableStackBelow24Filled;