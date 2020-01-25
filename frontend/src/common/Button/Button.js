import React from 'react';

// Style 
import styles from './Button.module.scss';

const Button = ({text, action, ...props}) => {
      return (
            <button className={styles.button}>
                  {text}
            </button>
      )
}

export default Button
