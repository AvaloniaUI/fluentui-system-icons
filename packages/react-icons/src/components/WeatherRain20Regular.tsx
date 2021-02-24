import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherRain20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0117 10.24 2.82 2.82 0 0114.13 13h-.7l-.02.03-1.48 2.7a.5.5 0 01-.91-.39l.03-.08L12.3 13h-1.85l-.02.03-1.48 2.7a.5.5 0 01-.91-.39l.03-.08L9.3 13H7.43l-1.49 2.74a.5.5 0 01-.6.23l-.08-.03a.5.5 0 01-.23-.6l.03-.08L6.3 13h-.42A2.82 2.82 0 013 10.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 5.55 7.53 4 10 4zm0 1a3.04 3.04 0 00-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S4.81 12 5.82 12h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0010 5z" fill={primaryFill} /></svg>;
};

export default WeatherRain20Regular;