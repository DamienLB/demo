export const RESULTS_LIMIT = 20;

export const SET_RESULTS = 'SET_RESULTS';
export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const SET_LASTNAME = 'SET_LASTNAME';
export const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT';
export const EDIT_ADDRESS = 'EDIT_ADDRESS';
export const EDIT_DOB = 'EDIT_DOB';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

export const ERROR = {
  STUDENT_NOT_FOUND: 'STUDENT_NOT_FOUND',
  FETCH_STUDENT: 'FETCH_STUDENT',
  UPDATE_STUDENT: 'UPDATE_STUDENT',
  FETCH_STUDENT_LIST: 'FETCH_STUDENT_LIST',
}
export const CLEAR = 'CLEAR';

export const setResults = (results) => {
  return { type: SET_RESULTS, results };
}

export const setFirstname = (text) => {
  return { type: SET_FIRSTNAME, text };
}

export const setLastname = (text) => {
  return { type: SET_LASTNAME, text };
}

export const setSelectedStudent = (student) => {
  return { type: SET_SELECTED_STUDENT, student };
}

export const editAddress = (address) => {
  return { type: EDIT_ADDRESS, address };
}

export const editDOB = (dob) => {
  return { type: EDIT_DOB, dob };
}

export const updateSuccess = () => {
  return { type: UPDATE_SUCCESS };
}

export const studentNotFound = () => {
  return { type: ERROR.STUDENT_NOT_FOUND };
}

export const fetchStudentError = () => {
  return { type: ERROR.FETCH_STUDENT };
}

export const updateStudentError = () => {
  return { type: ERROR.UPDATE_STUDENT };
}

export const fetchStudentListError = () => {
  return { type: ERROR.FETCH_STUDENT_LIST };
}

export const clear = () => {
  return { type: CLEAR };
}