import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NotebookSync24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56A6.5 6.5 0 004 11.5V4.25C4 3.01 5 2 6.25 2h10.5zM9.5 17.5H7.41a.5.5 0 000 1h.96a2.13 2.13 0 01-3.61.22.5.5 0 00-.82.57 3.13 3.13 0 004.94.23l.12-.15v.72a.5.5 0 001 0V17.91a.5.5 0 00-.5-.41zM20.75 15c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75zM6.5 14.38c-.95 0-1.8.42-2.38 1.1l-.12.14v-.71a.5.5 0 00-1 0V17.09c.04.2.2.36.4.4l.1.01h2.09a.5.5 0 000-1h-.97a2.13 2.13 0 013.62-.21.5.5 0 10.82-.57 3.15 3.15 0 00-2.56-1.34zM20.75 11c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75zm-6-1.5h-6.5c-.39 0-.7.28-.75.65v1.6c0 .38.27.7.64.74l.1.01h6.5c.38 0 .7-.28.75-.65v-1.6a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
};

export default NotebookSync24Filled;