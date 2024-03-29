import React from 'react';
import useStyles from './css';

const RedHeadline: React.FC = ({ children }: any) => {
  const { redHeadline } = useStyles();
  return <span className={redHeadline}>{children}</span>;
};

export default RedHeadline;
