import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColor16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.46 1.3a.5.5 0 00-.92 0l-3 7a.5.5 0 10.92.4L6.19 7H9.8l.73 1.7a.5.5 0 10.92-.4l-3-7zM9.38 6H6.62L8 2.77 9.38 6z" fill={primaryFill} /><path d="M3.5 10c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-9zM3 11.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
};

export default TextColor16Regular;