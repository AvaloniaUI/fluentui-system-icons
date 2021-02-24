import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookNumber16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.6 6l-.23 1H7.4l.23-1h.97z" fill={primaryFill} /><path d="M5 1h6a2 2 0 012 2v9.5a.5.5 0 01-.5.5H4a1 1 0 001 1h7.5a.5.5 0 010 1H5a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm2.99 3.36A.5.5 0 007 4.14L6.82 5H6a.5.5 0 100 1h.6l-.22 1H5.5a.5.5 0 000 1h.66l-.14.64a.5.5 0 00.97.21L7.2 8h.96l-.14.64a.5.5 0 10.97.22l.2-.86H10a.5.5 0 000-1h-.6l.22-1h.88a.5.5 0 000-1h-.65l.14-.64A.5.5 0 009 4.14L8.82 5h-.97l.14-.64z" fill={primaryFill} /></svg>;
};

export default BookNumber16Filled;