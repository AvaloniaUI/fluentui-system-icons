import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pulse20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 3a.5.5 0 01.48.37l3.05 11.3 2.5-8.31a.5.5 0 01.94-.04L15.35 10h2.15a.5.5 0 010 1H15a.5.5 0 01-.47-.32l-.98-2.62-2.57 8.58a.5.5 0 01-.96-.01L6.99 5.37l-1.5 5.27A.5.5 0 015 11H2.5a.5.5 0 010-1h2.12l1.9-6.64A.5.5 0 017 3z" fill={primaryFill} /></svg>;
};

export default Pulse20Regular;