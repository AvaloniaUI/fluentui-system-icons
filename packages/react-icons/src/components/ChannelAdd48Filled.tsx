import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAdd48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 6c-2.92 0-5.38 2-6.06 4.72A4 4 0 116 18.21v17.54C6 39.2 8.8 42 12.25 42h11.8a12.94 12.94 0 01-.31-13.5h-6.49a1.25 1.25 0 110-2.5h8.37A12.96 12.96 0 0142 24.04V12.25C42 8.8 39.2 6 35.75 6h-23.5zM16 20.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 110 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M7.5 12A2.49 2.49 0 005 14.5 2.5 2.5 0 107.5 12z" fill={primaryFill} /><path d="M46 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
};

export default ChannelAdd48Filled;