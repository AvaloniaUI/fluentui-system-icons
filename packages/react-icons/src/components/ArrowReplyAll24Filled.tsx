import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReplyAll24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.7 16.3a1 1 0 11-1.41 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.41 1.4L10.41 11H13a8 8 0 018 7.75V19a1 1 0 11-2 0 6 6 0 00-5.78-6h-2.81l3.3 3.3zm-5-10a1 1 0 010 1.4L4.41 12l4.3 4.3a1 1 0 11-1.42 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.41 0z" fill={primaryFill} /></svg>;
};

export default ArrowReplyAll24Filled;