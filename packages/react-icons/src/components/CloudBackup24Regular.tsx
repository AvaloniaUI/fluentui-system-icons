import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudBackup24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.45 8.15l.08.07 3.93 3.93a.75.75 0 01-.98 1.13l-.09-.07-2.65-2.66v9.7a.75.75 0 01-1.5 0v-9.68l-2.63 2.64a.75.75 0 01-.98.07l-.09-.07a.75.75 0 01-.07-.98l.07-.08 3.93-3.93a.75.75 0 01.98-.07zM12 4c3.52 0 5.52 2.27 5.8 5.02h.1c2.26 0 4.1 1.78 4.1 3.99 0 2.2-1.84 3.99-4.1 3.99H14.64a.75.75 0 010-1.49H17.9l.16-.01a2.52 2.52 0 002.4-2.5c0-1.31-1.06-2.4-2.4-2.48H17.12l-.1-.01c-.37-.05-.67-.34-.67-.7A4.3 4.3 0 0012 5.46 4.32 4.32 0 007.65 9.8c0 .37-.3.66-.67.7l-.1.01H6.1l-.16.01a2.53 2.53 0 00-2.4 2.33v.32a2.53 2.53 0 002.4 2.33H9.24c.4 0 .7.28.75.65l.01.1c0 .38-.28.7-.65.74l-.1.01H6.1A4.05 4.05 0 012 13c0-2.2 1.84-3.98 4.1-3.98h.1C6.47 6.25 8.47 4 12 4z" fill={primaryFill} /></svg>;
};

export default CloudBackup24Regular;