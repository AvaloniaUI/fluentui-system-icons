import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocalLanguage28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 2a.75.75 0 000 1.5h5.75v2.8c0 1.75-1.75 3.2-3.75 3.2a.75.75 0 000 1.5C17.31 11 20 9.13 20 6.3V2.76a.75.75 0 00-.75-.75h-6.5z" fill={primaryFill} /><path d="M10.7 7.46a.75.75 0 00-1.4 0l-7.24 17.5a.75.75 0 001.38.58l2.09-5.04h8.94l2.1 5.04a.75.75 0 001.38-.58l-2.2-5.31a.75.75 0 00-.15-.36L10.7 7.46zM13.84 19h-7.7L10 9.7l3.85 9.3z" fill={primaryFill} /><path d="M22.25 2c.42 0 .75.34.75.75V8.5h2.25a.75.75 0 110 1.5H23v9.25a.75.75 0 01-1.5 0V9.3a.8.8 0 010-.1V2.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default LocalLanguage28Regular;