import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as itemActions from '../actions';

const Item = ({
  item,
  item: { state, text },
  changeState,
  changeText,
  deleteItem
}) => {
  const editItem = item => {
    Swal.fire({
      text: 'Please enter text',
      input: 'text',
      showCancelButton: true,
      inputValue: item.text,
      inputValidator: value => {
        if (!value) return "Shouldn't be empty";
        return changeText(item, value);
      }
    });
  };

  const delItem = item => {
    Swal.fire({
      type: 'warning',
      titleText: 'Are you sure want to delete?',
      showCancelButton: true,
      preConfirm: () => deleteItem(item)
    });
  };

  return (
    <li className="item-block d-flex align-items-center justify-content-between">
      <i
        className={`item-state ${state ? 'active' : ''}`}
        onClick={() => changeState(item)}
      />
      <div className="flex-grow-1">{text}</div>
      <div className="d-flex">
        <i className="item-edit" onClick={() => editItem(item)} />
        <i className="item-waste" onClick={() => delItem(item)} />
      </div>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  changeState: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  changeState: item => dispatch(itemActions.changeItemState(item)),
  changeText: (item, text) => dispatch(itemActions.changeItemText(item, text)),
  deleteItem: item => dispatch(itemActions.deleteItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
