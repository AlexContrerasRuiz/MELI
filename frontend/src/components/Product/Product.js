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

    // Para hacer auto-fetch
    if (this.props.item === null) {
      this.props.searchFromQuery(location.pathname.split('/')[2]);
    }
  }


  render() {
    return this.props.item ? (
      <>
        <Breadcrumb />
        <div className={styles.Product}>
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
