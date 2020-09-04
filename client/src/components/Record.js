import React, { useEffect, useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { editAddress, editDOB } from '@actions';
import { updateStudent } from '@api';
import { Context } from '@store';
import "react-datepicker/dist/react-datepicker.css";


const Record = () => {
  const [state, dispatch] = useContext(Context);
  const {
    selectedId,
    selectedFirstName,
    selectedLastName,
    selectedAddress,
    selectedDOB,
    updateSuccessMessage,
    updateStudentError,
    studentNotFound,
  } = state;

  const updateAddress = (e) => {
    dispatch(editAddress(e.target.value));
  }

  const updateDOB = (date) => {
    console.log(date);
    dispatch(editDOB(date.toISOString()));
  }

  const saveStudent = () => {
    updateStudent(dispatch, selectedId, selectedAddress.trim(), selectedDOB);
  }

 let message;
 if (updateSuccessMessage) {
  message = (<div className="bg-success">Record saved!</div>);
 }

 if (updateStudentError) {
  message = (<div className="bg-danger">There was an error. The record was not saved.</div>);
 }

 if (studentNotFound) {
  message = (<div className="bg-warning">Record not found!</div>);
 }

  let content;
  if (!selectedId) {
    content = (<div className="bg-info">No records have been selected.</div>);
  } else {
    content = (
      <React.Fragment>
        <h4>{selectedFirstName} {selectedLastName}</h4>
        <div>
          <label>Edit Address:</label>
          <input
            value={selectedAddress}
            onChange={updateAddress}
          />
        </div>
        <div>
          <label>Edit DOB:</label>
          <DatePicker
            dateFormat="MM/dd/yyyy"
            selected={new Date(selectedDOB)}
            onChange={date => updateDOB(date)}
          />
        </div>
        <div>
         <button onClick={saveStudent}>Save</button>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="content">
      <h3>Edit Record:</h3>
      {content}
      {message}
    </div>
  );
};

export default Record;
