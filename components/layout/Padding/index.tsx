import { PaddingSize } from '@/lib/types/common';
import React from 'react';
import useStyles from './css';

const Padding: React.FC<{
  top: PaddingSize;
  bottom: PaddingSize;
  children: React.ReactNode;
}> = ({ children, top, bottom }) => {
  const classes = useStyles();
  return (
    <div
      className={[classes[`top-${top}`], classes[`bottom-${bottom}`]]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
};

export default Padding;
