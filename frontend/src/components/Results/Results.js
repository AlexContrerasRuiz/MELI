import React, { Component } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

// styles
import styles from './Results.module.scss';

// Components
import Item from './Item/Item';

class Results extends Component {


  shouldComponentUpdate(prevProps){
    
    const diferentItems = prevProps.items !== this.props.items;
    const diferentLocation = prevProps.location.search !== this.props.location.search;
    const evitRenderFromWithRouter = prevProps.match !== this.props.match;

    if (diferentItems) {
      console.log('Los Items son diferentes');
      return true;
    }
 
    if(diferentLocation) {
      console.log('Recargo de location')
      this.props.searchFromQuery();
      return true;
    }
   
    if(evitRenderFromWithRouter){
      return false;
    }
  }

  componentDidMount(){
    this.props.searchFromQuery();
  }


  render() {
    return (
      <div className={styles.Results_container}>
        <div className="WhiteBoard">
          <ol className={styles.Results_stackResults}>
            {this.props.items &&
               this.props.items.map((item, i) => {
                  return <Item key={i} data={item} />;
                })
              }
          </ol>
        </div>
      </div>
    );
  }
  
}

export default withRouter(Results);
