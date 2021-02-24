import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NotebookLightning24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM16.75 2C17.99 2 19 3 19 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-5.56c.43-.44.79-.95 1.08-1.5h4.48c.41 0 .75-.34.75-.75V4.25a.75.75 0 00-.75-.75H6.25a.75.75 0 00-.75.75v6.83c-.52.08-1.03.22-1.5.42V4.25C4 3.01 5 2 6.25 2h10.5zM7.5 14H6a.5.5 0 00-.47.34l-1 3A.5.5 0 005 18h.8l-.77 2.34c-.2.56.58.92.9.42l2.5-4A.5.5 0 008 16h-.45l.43-1.35A.5.5 0 007.5 14zm13.25 1c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20v-3h.75zm0-4c.38 0 .7.28.74.65l.01.1v1.5c0 .38-.28.7-.65.74l-.1.01H20V7h.75zm-5.5-2c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-7.5A.75.75 0 017 8.25v-2.5c0-.41.34-.75.75-.75h7.5zm-.75 1.5h-6v1h6v-1z" fill={primaryFill} /></svg>;
};

export default NotebookLightning24Regular;