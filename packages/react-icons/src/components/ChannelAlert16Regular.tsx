import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAlert16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 2.25c-.13 0-.25.01-.37.04A2 2 0 013.5 1h5a2 2 0 012 2v2c-.34 0-.68.03-1 .1V3a1 1 0 00-1-1h-5a1 1 0 00-.8.4c-.21-.1-.45-.15-.7-.15z" fill={primaryFill} /><path d="M5.2 9H3.5a1 1 0 01-1-1V5.68a1.75 1.75 0 01-1 0V8c0 1.1.9 2 2 2h1.52c.03-.34.1-.68.19-1z" fill={primaryFill} /><path d="M4 4.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.5 6a.5.5 0 000 1H6a.5.5 0 000-1H4.5z" fill={primaryFill} /><path d="M2.75 4a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12.5 9a2 2 0 10-4 0v1.8l-.35.35a.5.5 0 00.35.85h4a.5.5 0 00.35-.85l-.35-.36V9zm-3.41 4a1.5 1.5 0 002.82 0H9.1z" fill={primaryFill} /></svg>;
};

export default ChannelAlert16Regular;