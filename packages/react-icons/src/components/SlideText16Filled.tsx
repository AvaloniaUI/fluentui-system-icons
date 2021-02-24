import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideText16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V5zm3.5 0a.5.5 0 000 1h3a.5.5 0 000-1h-3zM4 7.5c0 .28.22.5.5.5h6a.5.5 0 000-1h-6a.5.5 0 00-.5.5zM4.5 9a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
};

export default SlideText16Filled;