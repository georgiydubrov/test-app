import React from 'react';
import { connect } from 'react-redux';

import { addNewItem } from '../actions';

const AddButton = ({ items, loading, addItem }) => {
  const showAddPopUp = () =>
    Swal.fire({
      text: 'Please enter text',
      input: 'text',
      showCancelButton: true,
      inputValue: '',
      inputValidator: value => {
        if (!value) return "Shouldn't be empty";
        return addItem(value);
      }
    });

  return (
    <button
      type="button"
      className="btn btn-dark"
      onClick={() => showAddPopUp()}
    >
      Add new
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: text => dispatch(addNewItem(text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddButton);
