import React, { useEffect } from "react";

// Styles
import styles from "./Breadcrumb.module.scss";

// Components
import BreadcrumbItem from "./BreadcrumbItem/BreadcrumbItem";

function Breadcrumb(props) {
  const { categories } = props;

  return (
    <div className={styles.Breadcrumb}>
      <div className={styles.Breadcrumb_container}>
        <ol className={styles.Breadcrumb_list}>
          {categories.map((cat, i, arr) => <BreadcrumbItem key={cat.id}  item={cat} idx={i} length={arr.length} /> )}
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumb;
