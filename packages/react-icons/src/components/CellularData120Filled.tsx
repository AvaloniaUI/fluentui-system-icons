import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CellularData120Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 01-1.5.11v-2.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 01-1.5.11v-4.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 01-1.5.11V8.75c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 01-1.5.11V6.75c0-.41.34-.75.75-.75zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 01-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75z" fill={primaryFill} /></svg>;
};

export default CellularData120Filled;