import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Highlight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2c.28 0 .5.22.5.5v4c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .65-.42 1.2-1 1.41V9a2 2 0 01-2 2v2.07a2 2 0 01-1.1 1.8l-6.18 3.08A.5.5 0 016 17.5V11a2 2 0 01-2-2V7.91c-.58-.2-1-.76-1-1.41v-4c0-.28.22-.5.5-.5zM5 8v1a1 1 0 001 1h8a1 1 0 001-1V8H5zm2 3v5.7l5.45-2.73a1 1 0 00.55-.9V11H7z" fill={primaryFill} /></svg>;
};

export default Highlight20Regular;