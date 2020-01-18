import React, { Component } from 'react';

// styles
import styles from './Results.module.scss';

export class Results extends Component {

  changeRouteHandler = () => {
    this.props.history.push('/items/ass')
  };

  render() {
    return (
      <div className={styles.Results_container}>

        <div className="WhiteBoard">
          <ol className={styles.Results_stackResults}>
            <li className={styles.Results_item} onClick={this.changeRouteHandler}>
              <div className={styles.Results_item_img}>
                <div className={styles.tempIMG}>a</div>
              </div>
              <div className={styles.Results_item_desc}>
                <div className={styles.Results_item_text}>
                  <p className={styles.Results_item_textPrice}>$.1980</p>

                  <p className={styles.Results_item_textDesc}>
                    Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico
                  </p>
                </div>
                <div className={styles.Results_item_place}>
                  <span>Capital Federal</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Results;
