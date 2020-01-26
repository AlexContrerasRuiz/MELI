import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// styles
import styles from './Results.module.scss';

// Components
import Item from './Item/Item';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

class Results extends Component {
  shouldComponentUpdate(prevProps) {
    const diferentItems = prevProps.items !== this.props.items;
    const diferentLocation =
      prevProps.location.search !== this.props.location.search;
    const evitRenderFromWithRouter = prevProps.match !== this.props.match;

    // Si los items son iguales no re-renderiza.
    if (diferentItems) {
      return true;
    }

    // Si viene de una url diferente (backwards).
    if (diferentLocation) {
      this.props.searchFromQuery();
      return true;
    }

    // FIXME El withRouter esta generando Re-Renders no necesarios.
    if (evitRenderFromWithRouter) {
      return false;
    }
  }

  componentDidMount() {

    // Si el componente hace auto fetch carga solo el contenido
    //  Se penso guardar las busquedas en el sesionStorage o aplicar alguna estrategia de pre-fetch
    this.props.searchFromQuery();
  }

  render() {
    return (
     <>
      {/* <Breadcrumb /> */}
      <section className={styles.Results_container}>
        <div className="WhiteBoard">
          <ol className={styles.Results_stackResults}>
            {this.props.items &&
              this.props.items.map((item, i) => {
                return <Item key={i} data={item} />;
              })}
          </ol>
        </div>
      </section>
    </>
    );
  }
}

export default withRouter(Results);
