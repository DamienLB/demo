import {
  RESULTS_LIMIT,
  setResults,
  setSelectedStudent,
  updateSuccess,
  studentNotFound,
  fetchStudentError,
  updateStudentError,
  fetchStudentListError,
} from '@actions';


export const fetchStudent = async (dispatch, id) => {
  try {
    // API_HOST is env var defined by webpack
    const response = await fetch(`${API_HOST}/students/${id}`);

    if (response.statusCode === 404) {
      console.error(`student not found with id ${id}`);
      dispatch(studentNotFound());
      return;
    }

    if (response.statusCode === 500) {
      throw new Error(`there was an error fetching student with id ${id}`);
    }
    const student = await response.json();
    dispatch(setSelectedStudent(student));
  } catch(e) {
    console.error(e);
    dispatch(fetchStudentError());
  }
}

export const fetchStudentList = async (dispatch, firstname='', lastname='') => {
  try {
    const query = [];

    if (firstname) query.push(`firstname=${firstname}`);
    if (lastname) query.push(`lastname=${lastname}`);

    // API_HOST is env var defined by webpack
    const response = await fetch(`${API_HOST}/students?limit=${RESULTS_LIMIT}&${query.join('&')}`);

    if (response.statusCode === 500) {
      throw new Error(`there was an error fetching the student list`);
    }
    const results = await response.json();
    dispatch(setResults(results));

  } catch(e) {
    console.error(e);
    dispatch(fetchStudentListError());
  }
}

export const updateStudent = async (dispatch, id, address, dob) => {
  try {
    // API_HOST is env var defined by webpack
    const response = await fetch(`${API_HOST}/students/${id}`,
    { 
      method: 'PUT',
      body: JSON.stringify({ address, dob }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.statusCode === 500) {
      throw new Error(`there was an error updating student with id ${id}`);
    }
    dispatch(updateSuccess());
  
  } catch(e) {
    console.error(e);
    dispatch(updateStudentError());
  }
}