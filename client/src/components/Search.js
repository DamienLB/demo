import React, { useEffect, useContext, useState } from 'react';
import { fetchStudentList } from '@api';
import { clear } from '@actions';
import { Context } from '@store';


const Search = () => {
  const [state, dispatch] = useContext(Context);
  const { fetchStudentError } = state;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    fetchStudentList(dispatch, firstname, lastname);
  }, [firstname, lastname]);

  const updateFirstname = (e) => {
    dispatch(clear());
    setFirstname(e.target.value.trim());
  }

  const updateLastname = (e) => {
    dispatch(clear());
    setLastname(e.target.value.trim());
  }
  
  let message;
  if (fetchStudentError) {
    message = (<div className="bg-danger">There was a server error.</div>);
  }

  return (
    <div className="search">
      <h3>Filter by:</h3>
      <div>
        <label>First Name: </label> 
        <input
          value={firstname}
          onChange={updateFirstname}
        />
      </div>
      <div>
        <label>Last Name: </label> 
        <input
          value={lastname}
          onChange={updateLastname}
        />
      </div>
      {message}
    </div>
  );
};

export default Search;
