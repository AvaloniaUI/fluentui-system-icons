import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReOrderDotsHorizontal20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-5 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM5.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8.5 5.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM10.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM4 13.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
};

export default ReOrderDotsHorizontal20Filled;