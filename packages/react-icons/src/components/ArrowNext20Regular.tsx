import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowNext20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 5a.5.5 0 01.5.41v9.09a.5.5 0 01-1 .09V5.5c0-.28.22-.5.5-.5zm-7.85.15a.5.5 0 01.63-.06l.07.06 4.5 4.5c.18.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 01-.76-.63l.06-.07L9.79 10 5.65 5.85a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
};

export default ArrowNext20Regular;