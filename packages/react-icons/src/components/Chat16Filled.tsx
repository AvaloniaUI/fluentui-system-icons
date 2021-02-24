import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Chat16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L5 13.2A6 6 0 108 2zM6 7c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3A.5.5 0 016 7zm.5 1.5h2a.5.5 0 010 1h-2a.5.5 0 010-1z" fill={primaryFill} /></svg>;
};

export default Chat16Filled;