import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FStop20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.88 5.35a2.83 2.83 0 013.68-2.22l.78.26a.5.5 0 10.32-.95l-.8-.26a3.83 3.83 0 00-4.96 3L9.24 9H5.5a.5.5 0 100 1h3.57l-.62 3.63a2.83 2.83 0 01-4.24 1.96l-.45-.27a.5.5 0 10-.52.86l.46.27a3.83 3.83 0 005.74-2.65l.65-3.8h3.41a.5.5 0 000-1h-3.24l.62-3.65z" fill={primaryFill} /></svg>;
};

export default FStop20Regular;