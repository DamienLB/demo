import React, { useContext } from 'react';
import { fetchStudent } from '@api';
import { clear } from '@actions';
import { Context } from '@store';


const Results = () => {
  const [state, dispatch] = useContext(Context);
  const { searchResults, firstFetch } = state;

  const getStudent = (id) => {
    dispatch(clear());
    fetchStudent(dispatch, id);
  }

  let resultItems = searchResults.map(student => {
    return (
      <div
        className="result-item"
        onClick={ () =>  getStudent(student.id) }
        key={student.id}
      >
        {student.lastname}, {student.firstname}
      </div>
    );
  });

  if (!resultItems.length && firstFetch) {
    resultItems = (<div className="bg-info">No results found.</div>);
  }

  return (
    <div className="results-box">
      <h4>Records:</h4>
      <div className="results">
        {resultItems}
      </div>
    </div>
  );
};

export default Results;
