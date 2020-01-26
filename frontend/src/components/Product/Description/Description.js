import React, { PureComponent } from 'react';

// Styles
import styles from './Description.module.scss';

export class Description extends PureComponent {
  render() {
    const description = this.props.description ? this.props.description : '';

    let newText = description.split('\n').join('<br>')

    return (
      <div className={styles.Product}>
        <p className={styles.Title}>Descripcion del producto</p>
        <p className={styles.Text}  dangerouslySetInnerHTML={{ __html: newText }}></p>
      </div>
    );
  }
}

export default Description;
