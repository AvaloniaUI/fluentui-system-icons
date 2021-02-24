import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideText20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5v-7zm3.5.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 10c0 .28.22.5.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zm.5 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
};

export default SlideText20Filled;