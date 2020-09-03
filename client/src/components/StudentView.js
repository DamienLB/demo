import React, { useEffect, useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { editAddress, editDOB } from '@actions';
import { updateStudent } from '@api';
import { Context } from '@store';

import "react-datepicker/dist/react-datepicker.css";

const StudentView = () => {
  const [state, dispatch] = useContext(Context);
  const {
    selectedId,
    selectedFirstName,
    selectedLastName,
    selectedAddress,
    selectedDOB,
  } = state;

  if (!selectedId) return null;

  const updateAddress = (e) => {
    dispatch(editAddress(e.target.value.trim()));
  }

  const updateDOB = (date) => {
    dispatch(editDOB(date.toISOString()));
  }
  const saveStudent = () => {
    updateStudent(dispatch, selectedId, selectedAddress, selectedDOB);
  }

  const datevalue = new Date(selectedDOB);

  return (
    <div className="studentView">
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
          selected={datevalue}
          onChange={date => editDOB(date)}
        />
      </div>
      <div>
       <button onClick={saveStudent}>Save</button>
      </div>
    </div>
  );
};

export default StudentView;