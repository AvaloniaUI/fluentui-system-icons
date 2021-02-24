import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SurfaceHub20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.26 2a.5.5 0 00-.5.45l-.76 8a.5.5 0 00.5.55h2.42l-.91 6.43a.5.5 0 00.98.14L7.36 15h3L10 17.43a.5.5 0 00.98.14l.37-2.57h2.28l.37 2.57a.5.5 0 00.98-.14L14.08 11h.66a.5.5 0 00.5-.45l.76-8a.5.5 0 00-.5-.55H5.26zm8.23 12h-1.98l.42-3h1.14l.42 3zm-3 0H7.51l.42-3h3l-.44 3z" fill={primaryFill} /></svg>;
};

export default SurfaceHub20Filled;