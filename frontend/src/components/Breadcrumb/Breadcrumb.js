import React, { useEffect } from 'react';

// Contexto
import { CtxConsumer } from '../../Context/Context';

// Styles
import styles from './Breadcrumb.module.scss';

// Components
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';

function Breadcrumb(props) {
   return (
    <CtxConsumer>
      {Contexto => {
        return (
          <div className={styles.Breadcrumb}>
            <div className={styles.Breadcrumb_container}>
              <ol className={styles.Breadcrumb_list}>
                {Contexto.categories.map((cat, i, arr) => (
                  <BreadcrumbItem
                    key={cat.id}
                    item={cat}
                    idx={i}
                    length={arr.length}
                  />
                ))}
              </ol>
            </div>
          </div>
        );
      }}
    </CtxConsumer>
  );
}

export default React.memo(Breadcrumb);
