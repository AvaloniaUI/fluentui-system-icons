import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Grid24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 13C9.99 13 11 14 11 15.25v3.5C11 19.99 10 21 8.75 21h-3.5C4.01 21 3 20 3 18.75v-3.5C3 14.01 4 13 5.25 13h3.5zm10 0c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25h-3.5C14.01 21 13 20 13 18.75v-3.5c0-1.24 1-2.25 2.25-2.25h3.5zm-10 1.5h-3.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75zm10 0h-3.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75zM8.75 3C9.99 3 11 4 11 5.25v3.5C11 9.99 10 11 8.75 11h-3.5C4.01 11 3 10 3 8.75v-3.5C3 4.01 4 3 5.25 3h3.5zm10 0C19.99 3 21 4 21 5.25v3.5C21 9.99 20 11 18.75 11h-3.5C14.01 11 13 10 13 8.75v-3.5C13 4.01 14 3 15.25 3h3.5zm-10 1.5h-3.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75zm10 0h-3.5a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
};

export default Grid24Regular;