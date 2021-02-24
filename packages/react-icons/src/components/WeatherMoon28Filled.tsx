import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoon28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.67 2.97a.75.75 0 01.79-.93A12 12 0 113.1 20.03a.75.75 0 01.47-1.1c1.6-.4 3.55-1.03 5.32-2.01a9.79 9.79 0 004.17-4c1.71-3.43 1.26-7.35.6-9.95z" fill={primaryFill} /></svg>;
};

export default WeatherMoon28Filled;