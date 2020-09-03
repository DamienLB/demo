import React from 'react';
import Store from '@store';
import LeftMenu from '@components/LeftMenu';
import StudentView from '@components/StudentView';


const App = () => {
  return (
    <Store>
      <div className="wrapper">
        <LeftMenu />
        <StudentView />
      </div>
    </Store>
  );
}

export default App;
