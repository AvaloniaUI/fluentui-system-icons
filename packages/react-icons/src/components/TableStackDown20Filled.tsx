import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableStackDown20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 17a.5.5 0 000-1h-13a.5.5 0 000 1h13zM5 3h2v4H3V5c0-1.1.9-2 2-2zM3 8h4v4H3.5a.5.5 0 01-.5-.5V8zm5 0v4h4V8H8zm4-5H8v4h4V3zm1 9V8h4v3.5a.5.5 0 01-.5.5H13zm0-9h2a2 2 0 012 2v2h-4V3z" fill={primaryFill} /></svg>;
};

export default TableStackDown20Filled;