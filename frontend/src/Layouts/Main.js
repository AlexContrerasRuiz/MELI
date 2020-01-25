import React from 'react';
import { Switch } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    <main>
      {console.log('rendered')}
      <Switch>{children}</Switch>
    </main>
  );
};

export default React.memo(Main);

