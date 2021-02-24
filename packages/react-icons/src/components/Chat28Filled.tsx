import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Chat28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.5a11.5 11.5 0 11-5.5 21.6l-4.72 1.36a1 1 0 01-1.24-1.24L3.9 19.5A11.5 11.5 0 0114 2.5zm.75 13h-4.6a.75.75 0 000 1.5H14.85a.75.75 0 000-1.5h-.1zm3-4.5h-7.6a.75.75 0 000 1.5H17.85a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
};

export default Chat28Filled;