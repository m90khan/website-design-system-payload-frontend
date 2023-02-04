import { BackgroundColorType } from '@/lib/types/common';
import React from 'react';
import useStyles from './css';

const BackgroundColor: React.FC<{
  color: BackgroundColorType;
  className?: string;
  children: React.ReactNode;
}> = ({ children, color, className }) => {
  const classes = useStyles();

  return (
    <div className={[classes[color], className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

export default BackgroundColor;
