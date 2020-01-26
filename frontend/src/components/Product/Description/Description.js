import React, { PureComponent } from 'react';

// Styles
import styles from './Description.module.scss';

export class Description extends PureComponent {
  render() {
    const description = this.props.description ? this.props.description : '';

    // Se formatea la descripcion
    let newText = description.split('\n').map(i => {
      return (
        <p key={Math.floor(Math.random() * 10000)} className={styles.Text}>
          {i}
        </p>
      );
    });

    return (
      <div className={styles.Product}>
        {console.log('rendered')}
        <p className={styles.Title}>Descripcion del producto</p>
        {newText}
      </div>
    );
  }
}

export default Description;
