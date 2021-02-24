import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleUp20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.65 9.15l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 01-.7.7L10.5 7.71v5.79a.5.5 0 01-1 0V7.7L7.35 9.86a.5.5 0 01-.7-.7z" fill={primaryFill} /><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
};

export default ArrowCircleUp20Regular;