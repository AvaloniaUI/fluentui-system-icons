import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleBus20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4a.5.5 0 000 1h2a.5.5 0 000-1H9z" fill={primaryFill} /><path d="M8 13a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13 14a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M3 5.5A3.5 3.5 0 016.5 2h7A3.5 3.5 0 0117 5.5V8h1a.5.5 0 010 1h-1v7.5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V16H7v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 013 16.5V9H2a.5.5 0 010-1h1V5.5zm13 0A2.5 2.5 0 0013.5 3h-7A2.5 2.5 0 004 5.5V10h12V5.5zM14 16v.5c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V16h-2zM4 16v.5c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V16H4zm0-1h12v-4H4v4z" fill={primaryFill} /></svg>;
};

export default VehicleBus20Regular;