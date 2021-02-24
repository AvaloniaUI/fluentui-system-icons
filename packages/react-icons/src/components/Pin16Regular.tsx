import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pin16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.06 2.45a1.5 1.5 0 00-2.39.35L5.65 6.59l-2.8.94a.5.5 0 00-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 00.82-.2l.94-2.8 3.78-2.03a1.5 1.5 0 00.35-2.38l-3.48-3.5zm-1.5.82a.5.5 0 01.8-.12l3.48 3.5a.5.5 0 01-.12.8l-3.96 2.1a.5.5 0 00-.23.3l-.75 2.22-3.85-3.85 2.23-.75a.5.5 0 00.28-.23l2.12-3.97z" fill={primaryFill} /></svg>;
};

export default Pin16Regular;