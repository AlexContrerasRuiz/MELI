import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    <main>
      <Switch>{children}</Switch>
    </main>
  );
};

export default React.memo(Main);
