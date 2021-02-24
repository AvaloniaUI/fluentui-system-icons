import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSnowShowerDay48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.5 40.03a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-13.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM26 12c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H15.38a7.37 7.37 0 110-14.73h.16c.53-5.1 4.12-9.26 10.46-9.26zm0 2.5a8.04 8.04 0 00-7.98 8.2c0 .76-.65 1.35-1.4 1.35H15.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.72h21.6a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0026 14.5zM8.7 20.3c.25.59 0 1.26-.55 1.56l-.11.06-2.32.96a1.24 1.24 0 01-1.06-2.24l.11-.06 2.31-.96c.64-.26 1.37.04 1.63.67zm13-9.65l-.05.02c-.93.3-1.79.7-2.57 1.2a5.5 5.5 0 00-6.83 7.95c-.76.26-1.47.63-2.13 1.08a7.87 7.87 0 013.8-11.26 7.88 7.88 0 017.79 1.01zm-16.12.18l.13.05 2.32.99c.63.26.93 1 .67 1.63-.24.59-.88.89-1.48.7l-.13-.04-2.31-.99c-.63-.26-.94-1-.68-1.63.24-.59.88-.89 1.48-.7zm7.37-6.17l.05.11.96 2.31a1.25 1.25 0 01-2.25 1.07l-.06-.11-.96-2.3a1.25 1.25 0 012.26-1.08zM22 4.1c.6.25.9.9.73 1.52l-.05.13-1 2.27a1.26 1.26 0 01-2.37-.83l.04-.13 1-2.28c.26-.64 1-.95 1.65-.68z" fill={primaryFill} /></svg>;
};

export default WeatherSnowShowerDay48Regular;