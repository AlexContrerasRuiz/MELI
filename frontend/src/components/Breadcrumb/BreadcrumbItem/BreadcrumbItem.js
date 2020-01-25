import React from "react";

// styles
import styles from "./BreadcrumbItem.module.scss";

function BreadcrumbItem(props) {
  const { item, idx, length } = props;

  const noChevron = idx === length - 1;

  return (
    <div className={styles.Breadcrumb_el_container}>
      <li className={styles.Breadcrumb_el}>{item.name}</li>
      <div
        className={noChevron ? styles.hide : styles.Breadcrumb_chevron}
      ></div>
    </div>
  );
}

export default BreadcrumbItem;
