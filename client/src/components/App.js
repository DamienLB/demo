import React from 'react';
import Store from '@store';
import LeftMenu from '@components/LeftMenu';
import Body from '@components/Body';


const App = () => {
  return (
    <Store>
      <div className="wrapper">
        <LeftMenu />
      </div>
    </Store>
  );
}

export default App;
