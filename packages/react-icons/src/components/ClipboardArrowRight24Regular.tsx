import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardArrowRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.88 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25c-.47-.2-.98-.34-1.5-.42V6.25a.75.75 0 00-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h5.48c.29.55.65 1.06 1.08 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5zm2.24 2.1l.01.15V4.1zm-2.24-.6h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zm9.25 14a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
};

export default ClipboardArrowRight24Regular;