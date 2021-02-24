import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dentist16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.58 4.24a.5.5 0 100 1c.24 0 .44.07.59.2.14.13.28.35.31.73a.5.5 0 001-.1 2.06 2.06 0 00-.65-1.38c-.35-.32-.8-.45-1.25-.45z" fill={primaryFill} /><path d="M7.1 2.8a3.1 3.1 0 00-2.6-.66c-.82.16-1.54.61-2.02 1.13a3.71 3.71 0 00-1.1 2.41c-.02.54.05 1.32.48 1.91.45.61.7.97.82 1.31.14.4.14.79.14 1.38v.04c0 .57.13 1.36.42 2.08.29.7.78 1.44 1.6 1.73l.02.01h.02c.48.13.93.1 1.27-.23.3-.28.42-.7.49-1.05.06-.33.1-.72.12-1.1l.02-.13c.03-.43.07-.86.16-1.27.22-1.1.55-1.27.67-1.31.37-.1.6-.05.74.03.16.1.3.26.42.55.26.58.34 1.41.4 2.18.07.76.23 1.46.54 1.92.17.24.4.45.73.52.32.07.64-.03.91-.2 1-.64 1.57-1.95 1.72-3.66.07-.8.15-1.17.27-1.46.06-.15.14-.3.25-.48l.1-.18.32-.54c.21-.39.57-1.1.61-1.93a3.1 3.1 0 00-1.27-2.65 3.94 3.94 0 00-2.7-1.03c-.8.05-1.44.41-1.9.8l-.02.01-.01.02c-.44.44-.63.5-.73.49-.12 0-.34-.1-.84-.6l-.02-.03-.02-.01zM2.39 5.72c.03-.74.38-1.27.84-1.77.35-.38.89-.71 1.47-.83a2.1 2.1 0 011.77.44c.47.47.94.85 1.49.88.57.02 1.03-.35 1.46-.77.34-.29.78-.52 1.3-.55.52-.02 1.19.15 2 .81.76.62.94 1.26.91 1.82-.03.6-.29 1.14-.49 1.5a23.41 23.41 0 01-.4.7c-.12.2-.23.38-.31.6-.18.43-.28.92-.35 1.76-.14 1.58-.65 2.5-1.26 2.9a.46.46 0 01-.13.06h-.03l-.03-.01a.42.42 0 01-.09-.1c-.15-.23-.3-.71-.35-1.43l-.01-.08a8.14 8.14 0 00-.48-2.43c-.17-.39-.44-.77-.85-1a1.94 1.94 0 00-1.49-.14h-.01c-.67.2-1.13.85-1.38 2.08-.1.47-.15.95-.18 1.38l-.01.14c-.03.39-.06.72-.11 1-.06.32-.14.45-.2.5 0 .01-.06.07-.3 0-.42-.15-.75-.57-1-1.16a4.94 4.94 0 01-.34-1.7v-.1c0-.54 0-1.1-.2-1.66-.18-.5-.53-.98-.95-1.55a2.2 2.2 0 01-.3-1.29z" fill={primaryFill} /></svg>;
};

export default Dentist16Regular;