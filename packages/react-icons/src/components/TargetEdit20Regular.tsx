import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TargetEdit20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10a5 5 0 0110-.06l-1.15 1.15a4 4 0 10-2.76 2.76l-.82.82c-.1.1-.2.21-.29.33A5 5 0 015 10zm5-7a7 7 0 016.93 6c.34-.02.69.02 1.02.12a8 8 0 10-8.94 8.82c0-.1.02-.2.05-.29l.17-.7A7 7 0 0110 3zm.98 12.38l4.83-4.83a1.87 1.87 0 012.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01z" fill={primaryFill} /></svg>;
};

export default TargetEdit20Regular;