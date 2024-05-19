// components/Box.js
import React from 'react';
import styles from '../styles/Box.module.css';

const Box = ({ children }) => {
  return <div className={styles.Box}>{children}</div>;
};

export default Box;