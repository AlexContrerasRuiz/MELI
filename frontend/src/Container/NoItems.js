import React, { PureComponent } from 'react';

// Styles

import styles from './NoItems.module.scss';

export class NoItems extends PureComponent {
  render() {
    return (
      <section className={styles.noitems_container}>
        <div className="WhiteBoard">
          <div className={styles.NoItems}>
            <h1>No hay publicaciones que coincidan con tu búsqueda.</h1>
            <ul>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Revisá la ortografía de la palabra.</li>
              <li>
                Navegá por las categorías para encontrar un producto similar.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default NoItems;
