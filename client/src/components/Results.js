import React, { useContext } from 'react';
import { fetchStudent } from '@api';
import { Context } from '@store';


const Results = () => {
  const [state, dispatch] = useContext(Context);
  const { searchResults } = state;
  const resultItems = searchResults.map(student => {
    return (
      <div
        className="result-item"
        onClick={ () => fetchStudent(dispatch, student.id) }
        key={student.id}
      >
        {student.lastname}, {student.firstname}
      </div>
    );
  });

  return (
    <div className="results">{resultItems}</div>
  );
};

export default Results;