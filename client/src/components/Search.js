import React, { useEffect, useContext, useState } from 'react';
import { fetchStudentList } from '@api';
import { Context } from '@store';


const Search = () => {
  const [null_, dispatch] = useContext(Context);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');


  useEffect(() => {
    fetchStudentList(dispatch, firstname, lastname);
  }, [firstname, lastname]);

  const updateFirstname = (e) => {
    setFirstname(e.target.value.trim());
  }
  const updateLastname = (e) => {
    setLastname(e.target.value.trim());
  }

return (
    <div className="search">
      <h3>Search by:</h3>
      <div>
        <label>First Name: </label> 
        <input
          value={firstname}
          size="12"
          onChange={updateFirstname}
        />
      </div>
      <div>
        <label>Last Name: </label> 
        <input
          value={lastname}
          size="12"
          onChange={updateLastname}
        />
      </div>
    </div>
  );
};

export default Search;
