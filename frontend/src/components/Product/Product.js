import React, { Component } from 'react';

// Styles
import styles from './Product.module.scss';

export class Product extends Component {
  componentWillMount() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
  }

  render() {
    return (
      <div className={styles.Product}>
        <div className="WhiteBoard ">
          <div className={styles.Product_container}>
            <div className={styles.Product_detail}>
              <div className={styles.Product_img}>
                <img src="http://mla-s1-p.mlstatic.com/899345-MLA31003463574_062019-O.jpg"></img>
              </div>
              <div className={styles.Product_desc}>
                <p className={styles.Product_descTitle}>
                  Descripcion del producto
                </p>
                <p className={styles.Product_descText}>
                  {' '}
                  Rendimiento:\nCon el procesador octa-core de 1,8 GHz y 3 GB de
                  RAM ejecutá tus tareas y disfrutá de tus videos y juegos con
                  más agilidad, además de tener 32 GB de almacenamiento para tus
                  fotos, música y videos.\n\nPantalla Max Vision de 5.7\\\" Full
                  HD+:\nNuevo diseño 3D con pantalla extendida, perfecto para
                  tus manos y tus ojos: tus fotos, videos y juegos favoritos con
                  mayor definición.\n\nCámara inteligente:\nDivertite con la
                  cámara dual trasera, sacá selfies sorprendentes, incluso en la
                  oscuridad, gracias al flash LED y mucho más: reconocimiento de
                  lugares y objetos con información en segundos. \n\nBatería de
                  3000 mAh + Carga TurboPower:\nTe garantiza hasta 6 horas de
                  uso en sólo 15 minutos de carga.\n\nDiseño en metal y cristal
                  3D:\nPosee un acabado trasero de vidrio 3D con un efecto
                  visual innovador que lo hace aún más elegante.
                </p>
              </div>
            </div>
            <div className={styles.Product_aside}>
              <p className={styles.data}>Condition - Sold_quantity Vendidos</p>
              <p className={styles.name}>Motorola G6 32 Gb Negro 3 Gb Ram </p>
              <p className={styles.price}>$ 20096.51</p>
              <button>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
