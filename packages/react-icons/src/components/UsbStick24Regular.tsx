import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const UsbStick24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.27 2c.38 0 .7.28.74.65V7.13c.82.3 1.42 1.05 1.49 1.95v10.67c0 1.2-.92 2.17-2.1 2.24l-.15.01h-6.5c-1.19 0-2.16-.93-2.24-2.1V9.25c0-.98.63-1.82 1.5-2.13V2.75c0-.38.29-.7.65-.75h6.6zm-.02 6.5h-6.5c-.38 0-.69.28-.74.65v10.6c0 .38.28.7.64.74l.1.01h6.5c.38 0 .7-.28.75-.65V9.25c0-.38-.28-.7-.64-.74l-.1-.01zm-.73-5h-5V7h5V3.5z" fill={primaryFill} /></svg>;
};

export default UsbStick24Regular;