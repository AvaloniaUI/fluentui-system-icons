import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Autosum20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.04 3.8a.5.5 0 01.46-.3h11a.5.5 0 110 1H5.67l4.56 4.73a.5.5 0 01.02.67l-4.68 5.6h9.93a.5.5 0 110 1h-11a.5.5 0 01-.38-.82L9.2 9.6 4.14 4.35a.5.5 0 01-.1-.55z" fill={primaryFill} /></svg>;
};

export default Autosum20Regular;