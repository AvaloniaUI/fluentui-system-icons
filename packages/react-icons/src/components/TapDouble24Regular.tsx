import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TapDouble24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 7c1.35 0 2.18.97 2.25 2.33v2.29l2.22.4a3.25 3.25 0 012.6 3.86l-.04.18L17.73 20a2.25 2.25 0 01-1.69 1.61l-.16.03-2.42.35a2.25 2.25 0 01-2.28-1.12l-.08-.16-.03-.06c-.24-.5-.59-.95-1.03-1.28l-.2-.14-1.87-1.26-.1-.06-.1-.05-2.36-1.17a.75.75 0 01-.41-.66 2.5 2.5 0 011.41-2.44c.7-.35 1.64-.33 2.83.02l.26.08V9.5c0-1.45.84-2.51 2.25-2.51zm0 1.5c-.46 0-.71.27-.75.87v5.38c0 .54-.54.9-1.04.7-1.46-.6-2.44-.75-2.87-.53a.97.97 0 00-.51.52l-.04.12 1.9.95.18.1.18.1 1.88 1.26a4.97 4.97 0 011.63 1.8l.12.24.03.06c.12.27.39.43.68.43h.1l2.42-.35c.26-.04.48-.2.58-.45l.04-.1 1.05-3.92c.25-.94-.3-1.9-1.24-2.15l-.07-.01-2.9-.53a.75.75 0 01-.61-.63l-.01-.11V9.51c0-.7-.25-1.01-.75-1.01zm0-6.5a7.25 7.25 0 016.7 10.03 4.2 4.2 0 00-1.3-.78 5.75 5.75 0 10-10.22 1.13 3.32 3.32 0 00-1.42.57A7.25 7.25 0 0111.75 2zm0 2.5a4.75 4.75 0 014.41 6.5L15 10.8V9.25c0-.68-.21-1.31-.57-1.83l-.09-.14A3.07 3.07 0 0011.75 6c-1.18 0-2.08.53-2.64 1.35a3.24 3.24 0 00-.61 1.9V12.4l-.26-.04a1 1 0 01-.62-.32C7.21 11.58 7 10.65 7 9.25a4.75 4.75 0 014.75-4.75z" fill={primaryFill} /></svg>;
};

export default TapDouble24Regular;