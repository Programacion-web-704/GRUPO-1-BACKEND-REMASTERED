// components/Layout.js
import React from 'react';
import styles from '../estilos/todo.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
