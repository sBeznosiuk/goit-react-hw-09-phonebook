import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../redux/contacts/actions';
import { TextField } from '@material-ui/core';

const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = e => dispatch(filterContacts(e.target.value));
  return (
    <TextField
      type="text"
      label="Filter contacts"
      onChange={onFilter}
      margin="normal"
    />
  );
};

export default Filter;

// const mapDispatchToProps = dispatch => ({
//   onFilter: e => dispatch(filterContacts(e.target.value)),
// });
