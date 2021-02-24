import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageBottomLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.93 10.56a.5.5 0 10-1-.15l-.08.59H8.61l.07-.44a.5.5 0 10-1-.15L7.6 11H7a.5.5 0 100 1h.46l-.22 1.5H6.5a.5.5 0 100 1h.59l-.14.93a.5.5 0 101 .14l.15-1.07h1.24l-.14.93a.5.5 0 001 .14l.15-1.07H11a.5.5 0 000-1h-.5l.22-1.5h.78a.5.5 0 000-1h-.64l.07-.44zM8.25 13.5l.22-1.5H9.7l-.22 1.5H8.25z" fill={primaryFill} /><path d="M14 18a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8zm0-1H6a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v12a1 1 0 01-1 1z" fill={primaryFill} /></svg>;
};

export default DocumentPageBottomLeft20Regular;