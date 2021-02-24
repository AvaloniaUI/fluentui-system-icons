import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9a5 5 0 015-5h4.5a.5.5 0 010 1H9a4 4 0 100 8h5.3l-2.7-2.7a.5.5 0 11.7-.7l3.54 3.53a.5.5 0 01.13.5.5.5 0 01-.14.25L12.3 17.4a.5.5 0 01-.71-.7l2.7-2.71H9a5 5 0 01-5-5z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownRight20Regular;