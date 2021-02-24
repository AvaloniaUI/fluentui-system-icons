import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DoorArrowLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 01-.66-1H6a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v5.02c.34.03.68.1 1 .19V4a2 2 0 00-2-2H6zm2 8a1 1 0 11-2 0 1 1 0 012 0zm11 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L13.71 15h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /></svg>;
};

export default DoorArrowLeft20Regular;