import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { filterContacts } from '../redux/contacts/actions';
import { TextField } from '@material-ui/core';

const Filter = ({ onFilter }) => {
  return (
    <TextField
      type="text"
      label="Filter contacts"
      onChange={onFilter}
      margin="normal"
    />
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(filterContacts(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
