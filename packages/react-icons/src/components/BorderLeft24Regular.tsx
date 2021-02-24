import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BorderLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3a.75.75 0 010 1.5h-.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 010 1.5h-.5A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h.5z" fill={primaryFill} /><path d="M13.25 4.5a.75.75 0 000-1.5h-2.5a.75.75 0 000 1.5h2.5z" fill={primaryFill} /><path d="M19.5 10.75a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5z" fill={primaryFill} /><path d="M14 20.25c0 .41-.34.75-.75.75h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M17.75 3a.75.75 0 000 1.5h.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 001.5 0v-.5A2.75 2.75 0 0018.25 3h-.5z" fill={primaryFill} /><path d="M17 20.25c0 .41.34.75.75.75h.5A2.75 2.75 0 0021 18.25v-.5a.75.75 0 00-1.5 0v.5c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
};

export default BorderLeft24Regular;