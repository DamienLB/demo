import React, { useEffect, useContext, useState } from 'react';
import { fetchStudentList } from '@api';
import { clear, setFirstname, setLastname, slicePages } from '@actions';
import { Context } from '@store';


const Search = () => {
  const [state, dispatch] = useContext(Context);
  const { fetchStudentError, firstname, lastname } = state;


  useEffect(() => {
    fetchStudentList(dispatch, firstname.trim(), lastname.trim());
  }, [firstname, lastname]);

  const updateFirstname = (e) => {
    dispatch(clear());
    // this resets the pages in state to prepare for new batch
    dispatch(slicePages(0));
    dispatch(setFirstname(e.target.value));
  }

  const updateLastname = (e) => {
    dispatch(clear());
    // this resets the pages in state to prepare for new batch
    dispatch(slicePages(0));
    dispatch(setLastname(e.target.value));
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
