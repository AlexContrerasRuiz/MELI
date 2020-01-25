import React, { useEffect, Component } from 'react';

// Styles
import styles from './Product.module.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

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
    if(this.props.item === null){
      console.log('run')
      this.props.searchFromQuery(location.pathname.split('/')[2]);
    };
  }

  // TODO: Componentizar y reestructurar la maqueta.

  render() {
    return this.props.item ? (
      <>
      <Breadcrumb/>
      <div className={styles.Product}>
        {console.log('rendered')}
        <div className="WhiteBoard ">
          <div className={styles.Product_container}>
            <div className={styles.Product_detail}>
              <div className={styles.Product_img}>
                <img src={this.props.item.picture}></img>
              </div>
              <div className={styles.Product_desc}>
                <p className={styles.Product_descTitle}>
                  Descripcion del producto
                </p>
                <p
                  className={styles.Product_descText}
                  dangerouslySetInnerHTML={{
                    __html: this.props.item.description
                  }}
                ></p>
              </div>
            </div>
            <div className={styles.Product_aside}>
              <p className={styles.data}>
                {this.props.item.condition === 'new' ? 'Nuevo' : 'Usado'} -
                {this.props.item.sold_quantity} Vendidos
              </p>
              <p className={styles.name}> {this.props.item.title} </p>
              {this.props.item.price ? (
                <p className={styles.price}>
                  {this.props.item.price.currency === 'ARS' ? '$' : 'U$S'}
                  {this.props.item.price.amount} .
                  {this.props.item.price.decimals || '00'}
                </p>
              ) : null}
              <button>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
      </>
    ) : null;
  }
}

export default Product;
