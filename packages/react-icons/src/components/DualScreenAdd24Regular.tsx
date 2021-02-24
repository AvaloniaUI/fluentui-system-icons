import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.02 6a6.63 6.63 0 00.06 1.5H3.75a.25.25 0 00-.25.25v12.5c0 .13.11.25.25.25h7.5V10.33c.41.57.92 1.07 1.5 1.48v8.69h7.5c.13 0 .25-.11.25-.25v-8.62A6.53 6.53 0 0022 9.97v10.28c0 .97-.79 1.75-1.75 1.75H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6h6.27zm6.22 11.5a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zm-7 0a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zM16.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V6h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H16v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V7h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4L19.5 6H17V3.4a.5.5 0 00-.5-.4z" fill={primaryFill} /></svg>;
};

export default DualScreenAdd24Regular;