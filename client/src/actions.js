export const SET_SEARCH_LAST_ON = 'SET_SEARCH_LAST_ON';
export const SET_SEARCH_LAST_OFF = 'SET_SEARCH_LAST_OFF';
export const SET_SEARCH_FIRST_ON = 'SET_SEARCH_FIRST_ON';
export const SET_SEARCH_FIRST_OFF = 'SET_SEARCH_FIRST_OFF';
export const SET_SEARCH_TEXTFIELD = 'SET_SEARCH_TEXTFIELD';
export const SET_RESULTS = 'SET_RESULTS';
export const SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT';


export const setSearchLastOn = () => {
  return { type: SET_SEARCH_LAST_ON };
}

export const setSearchLastOff = () => {
  return { type: SET_SEARCH_LAST_OFF };
}

export const setSearchFirstOn = () => {
  return { type: SET_SEARCH_FIRST_ON };
}

export const setSearchFirstOff = () => {
  return { type: SET_SEARCH_FIRST_OFF };
}

export const setSearchTextField = (text) => {
  return { type: SET_SEARCH_TEXTFIELD, text };
}

export const setResults = (results) => {
  return { type: SET_RESULTS, results };
}

export const setSelectedStudent = (id, firstname, lastname, address, dob) => {
  return { type: SET_SELECTED_STUDENT, id, firstname, lastname, address, dob };
}