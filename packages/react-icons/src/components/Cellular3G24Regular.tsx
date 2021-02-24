import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cellular3G24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.9 3.62a.75.75 0 01-1.28.79l-.02-.02a.64.64 0 00-.15-.12c-.15-.08-.47-.2-1.06-.09-.41.08-.62.33-.75.67a2.1 2.1 0 00-.14.65v1.25a1 1 0 001 1h.25a1 1 0 00.97-.75h-.47a.75.75 0 010-1.5h1.25c.41 0 .75.34.75.75v.5a2.5 2.5 0 01-2.5 2.5h-.25A2.5 2.5 0 018 6.75V5.46a2.57 2.57 0 01.03-.34c.03-.22.09-.5.2-.82.25-.62.8-1.4 1.88-1.6.92-.16 1.6 0 2.07.26a2.13 2.13 0 01.7.64l.01.01zm-8.4.95l-.06.04a.75.75 0 11-.88-1.22c-.07.06.64-.64 1.69-.64 1.06 0 1.74.72 1.94 1.5A2.07 2.07 0 016.86 6c.3.4.42.9.4 1.35-.07.91-.75 1.9-2.01 1.9-.54 0-.97-.17-1.27-.34-.29-.17-.48-.35-.47-.34a.75.75 0 01.98-1.14l.01.01c.08.07.34.31.75.31.18 0 .29-.06.36-.14a.59.59 0 00.15-.36.5.5 0 00-.1-.36c-.05-.06-.16-.14-.41-.14a.75.75 0 110-1.5c.28 0 .38-.1.43-.18.07-.1.1-.26.06-.44a.53.53 0 00-.17-.28.47.47 0 00-.32-.1 1.06 1.06 0 00-.68.25 1.1 1.1 0 00-.04.04l-.02.01-.02.02zM11.74 12c.38 0 .7.28.74.65l.01.1v7.5a.75.75 0 01-1.5.1v-7.6c0-.41.34-.75.75-.75zm4-3c.38 0 .7.28.74.65l.01.1v10.5a.75.75 0 01-1.5.1V9.75c0-.41.34-.75.75-.75zm-12 9c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75zm16-12c.37 0 .69.28.74.64l.01.1v13.5a.75.75 0 01-1.5.12V6.76c0-.42.33-.76.74-.76zm-12 9c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default Cellular3G24Regular;