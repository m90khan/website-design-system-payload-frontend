import React from 'react';
import useStyles from './css';

const Spacer: React.FC<Omit<any, 'blockType'>> = ({ size }) => {
  const classes = useStyles();

  return <div className={classes[size]} />;
};

export default Spacer;
