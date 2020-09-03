import {
  setResults,
  setSelectedStudent,
  updateSuccess,
  studentNotFound,
  fetchStudentError,
  updateStudentError,
  fetchStudentListError,
} from '@actions';


const apihost = 'http://localhost:3000';

export const fetchStudent = async (dispatch, id) => {
  try {
    const response = await fetch(`${apihost}/students/${id}`);
    if (response.statusCode === 404) {
      console.error(`student not found with id ${id}`);
      dispatch(studentNotFound());
      return;
    }

    if (response.statusCode === 500) {
      throw new Error(`there was an error fetching student with id ${id}`);
    }

    const student = response.json();
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
    const response = await fetch(`${apihost}/students?${query.join('&')}`);

    if (response.statusCode === 500) {
      throw new Error(`there was an error fetching the student list`);
    }

    const results = response.json();
    dispatch(setResults(results));
  } catch(e) {
    console.error(e);
    dispatch(fetchStudentListError());
  }
}

export const updateStudent = async (dispatch, id, address, dob) => {
  try {
    const response = await fetch(`${apihost}/students/${id}`, { method: 'PUT' });
    if (response.statusCode === 500) {
      throw new Error(`there was an error updating student with id ${id}`);
    }
    dispatch(updateSuccess());
  } catch(e) {
    console.error(e);
    dispatch(updateStudentError());
  }
}