import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Textbox20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM6 6.75c0-.41.32-.75.7-.75h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75zm0 3c0-.41.32-.75.7-.75h3.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75zM6.7 12h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75z" fill={primaryFill} /></svg>;
};

export default Textbox20Filled;