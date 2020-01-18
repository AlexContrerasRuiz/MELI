import React from 'react';

// Styles
import styles from './Breadcrumb.module.scss';

function Breadcrumb() {
  return (
    <div className={styles.Breadcrumb}>
      <div className={styles.Breadcrumb_container}>
        <ol className={styles.Breadcrumb_list}>
            <li className={styles.Breadcrumb_el}>Electronica</li>
            <div className={styles.Breadcrumb_chevron}></div>
            <li className={styles.Breadcrumb_el}>Electronica</li>
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumb;
