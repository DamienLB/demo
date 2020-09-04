import {
  SET_RESULTS,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_SELECTED_STUDENT,
  EDIT_ADDRESS,
  EDIT_DOB,
  SLICE_PAGES,
  ERROR,
  CLEAR,
  UPDATE_SUCCESS,
 } from '@actions';


export const initialState = {
  searchResults: [],
  firstname: '',
  lastname: '',
  pages: [],
  resultsCount: 0,
  selectedId: null,
  selectedFirstName: '',
  selectedLastName: '',
  selectedAddress: '',
  selectedDOB: '',
  studentNotFound: false,
  firstFetch: false,
  fetchStudentError: false,
  updateStudentError: false,
  fetchStudentListError: false,
  updateSuccessMessage: false,
};

export const reducer = (state, action) => {
  switch(action.type) {
    case SET_RESULTS:
      const { results, count } = action.results;
      const lastresult = results[results.length -1];
      const newpages = state.pages.slice();

      // save this info for key based pagination
      newpages.push({
        firstnamekey: lastresult.firstname,
        lastnamekey: lastresult.lastname,
        idkey: lastresult.id,
      });
      return {
        ...state,
        searchResults: results,
        resultsCount: count,
        firstFetch: true,
        pages: newpages,
      };
    case SET_FIRSTNAME:
      return {
        ...state,
        firstname: action.text,
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastname: action.text,
      };
    case SLICE_PAGES: {
      return {
        ...state,
        pages: state.pages.slice(0, action.n),
      };
    }  
    case SET_SELECTED_STUDENT:
      return {
        ...state,
        selectedId: action.student.id,
        selectedFirstName: action.student.firstname,
        selectedLastName: action.student.lastname,
        selectedAddress: action.student.address,
        selectedDOB: action.student.dob,
      };
    case EDIT_ADDRESS:
      return {
        ...state,
        selectedAddress: action.address,
      };
    case EDIT_DOB:
      return {
        ...state,
        selectedDOB: action.dob,
      };
    case ERROR.STUDENT_NOT_FOUND:
      return {
        ...state,
        studentNotFound: true,
      };
    case ERROR.FETCH_STUDENT:
      return {
        ...state,
        fetchStudentError: true,
      };
    case ERROR.UPDATE_STUDENT:
      return {
        ...state,
        updateStudentError: true,
      };
    case ERROR.FETCH_STUDENT_LIST:
      return {
        ...state,
        fetchStudentListError: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        updateSuccessMessage: true,
      };
    case CLEAR:
      return {
        ...state,
        studentNotFound: false,
        fetchStudentError: false,
        updateStudentError: false,
        fetchStudentListError: false,
        fetchStudentListError: false,
        updateSuccessMessage: false,
      };
  }
}
