import React from 'react';
import Search from '@components/Search';
import Results from '@components/Results';

const LeftMenu = () => {
  return (
    <div className="leftmenu">
      <Search />
      <Results />
    </div>
  );
};

export default LeftMenu;
