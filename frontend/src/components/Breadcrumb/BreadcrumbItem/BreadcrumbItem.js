import React, { PureComponent } from 'react';

// styles
import styles from './BreadcrumbItem.module.scss';


export class BreadcrumbItem extends PureComponent {
  render() {
    const { item, idx, length } = this.props;

    const noChevron = idx === length - 1;
    return (
      <div className={styles.Breadcrumb_el_container}>
        {console.log('[BreadcrumbItem] : Rendered')}
        <li className={styles.Breadcrumb_el}>{item.name}</li>
        <div
          className={noChevron ? styles.hide : styles.Breadcrumb_chevron}
        ></div>
      </div>
    );
  }
}

export default BreadcrumbItem;
