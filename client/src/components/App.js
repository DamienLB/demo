import React from 'react';
import Store from '@store';
import LeftMenu from '@components/LeftMenu';
import Record from '@components/Record';
import '@stylesheets/main.scss';

const App = () => {
  return (
    <Store>
      <div className="header">Red River Demo</div>
      <div className="main">
        <LeftMenu />
        <Record />
      </div>
    </Store>
  );
}

export default App;
