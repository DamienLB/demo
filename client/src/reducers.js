import {
  SET_SEARCH_LAST_ON,
  SET_SEARCH_LAST_OFF,
  SET_SEARCH_FIRST_ON,
  SET_SEARCH_FIRST_OFF,
  SET_SEARCH_TEXTFIELD,
  SET_RESULTS,
  SET_SELECTED_STUDENT,
 } from '@actions';


export const initialState = {
  searchLastname: false,
  searchFirstname: false,
  searchTextField: '', 
  searchResults: [],
  selectedId: null,
  selectedFirstName: '',
  selectedLastName: '',
  selectedAddress: '',
  selectedDOB: '',
};

export const reducer = (state, action) => {
  switch(action.type) {
    case SET_SEARCH_LAST_ON:
      return {
        ...state,
        searchLastname: true,
      };
    case SET_SEARCH_LAST_OFF:
      return {
        ...state,
        searchLastname: false,
      };
    case SET_SEARCH_FIRST_ON:
      return {
        ...state,
        searchFirstname: true,
      };
    case SET_SEARCH_FIRST_OFF:
      return {
        ...state,
        searchFirstname: false,
      };
    case SET_SEARCH_TEXTFIELD:
      return {
        ...state,
        searchTextField: action.text,
      };
    case SET_RESULTS:
      return {
        ...state,
        searchResults: action.results,
      };
    case SET_SELECTED_STUDENT:
      return {
        ...state,
        selectedId: action.id,
        selectedFirstName: action.firstname,
        selectedLastName: action.lastname,
        selectedAddress: action.address,
        selectedDOB: action.dob,
      };
  }
}
