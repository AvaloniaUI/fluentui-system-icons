import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Comment48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 8.5a4.75 4.75 0 00-4.75 4.75v15.5a4.75 4.75 0 004.75 4.75h3.25v7.84l11.1-7.84h11.15a4.75 4.75 0 004.75-4.75v-15.5a4.75 4.75 0 00-4.75-4.75h-25.5zM4 13.25C4 9.25 7.25 6 11.25 6h25.5c4 0 7.25 3.25 7.25 7.25v15.5c0 4-3.25 7.25-7.25 7.25H26.4l-10.85 7.66A2.25 2.25 0 0112 41.82V36h-.75C7.25 36 4 32.75 4 28.75v-15.5z" fill={primaryFill} /></svg>;
};

export default Comment48Regular;