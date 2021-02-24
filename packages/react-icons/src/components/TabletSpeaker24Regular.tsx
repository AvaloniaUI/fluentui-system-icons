import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabletSpeaker24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.14 3.3a4.53 4.53 0 00-.91-1.13.75.75 0 00-.96 1.16c.13.1.35.35.59.74.4.67.64 1.48.64 2.43 0 .95-.24 1.76-.64 2.43-.24.39-.46.64-.59.74a.75.75 0 00.96 1.16c.25-.21.59-.58.91-1.13.54-.9.86-1.96.86-3.2 0-1.24-.32-2.3-.86-3.2zm-2.27 1.1c-.23-.36-.48-.6-.67-.75a.75.75 0 00-.9 1.2A2.24 2.24 0 0119 6.5a2.24 2.24 0 01-.7 1.65l-.08.07a.75.75 0 00.98 1.13 3.73 3.73 0 001.3-2.85c0-.81-.23-1.52-.63-2.1zM17 3.75a.75.75 0 00-1.31-.5L14.16 5h-1.41a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h1.41l1.53 1.74A.75.75 0 0017 9.25v-5.5zM4.25 4H12a1 1 0 00-1 1v.5H4.25a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75v-5.77a1.75 1.75 0 001.5-.5v6.27C22 19 21 20 19.75 20H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4zm9.5 11.5a.75.75 0 01.1 1.5h-3.6a.75.75 0 01-.1-1.5h3.6z" fill={primaryFill} /></svg>;
};

export default TabletSpeaker24Regular;