import React, { useEffect, Component } from 'react';

// Styles
import styles from './Product.module.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Description from './Description/Description';
import Aside from './Aside/Aside';

class Product extends Component {
  shouldComponentUpdate(prevProps) {
    const sameItem = prevProps.item == this.props.item;

    if (sameItem) {
      return false;
    }

    if (!sameItem) {
      return true;
    }
  }

  componentDidMount() {
    if (this.props.item === null) {
      console.log('run');
      this.props.searchFromQuery(location.pathname.split('/')[2]);
    }
  }

  // TODO: Componentizar y reestructurar la maqueta.

  render() {
    return this.props.item ? (
      <>
        <Breadcrumb />
        <div className={styles.Product}>
          {console.log('rendered')}
          <div className="WhiteBoard ">
            <div className={styles.Product_container}>
              <div className={styles.Product_detail}>
                <div className={styles.Product_img}>
                  <img src={this.props.item.picture}></img>
                </div>

                <Description description={this.props.item.description} />
              </div>

              <Aside grid={styles.Product_aside} item={this.props.item}/>
            </div>
          </div>
        </div>
      </>
    ) : null;
  }
}

export default Product;
