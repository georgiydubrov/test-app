import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { Item, AddButton } from '.';
import { addNewItem } from '../actions';

const renderList = list => list.map(i => <Item key={i.id} item={i} />);

const List = ({ items, loading, addItem }) => (
  <div className="list-block d-flex flex-column">
    <ul>{renderList(items)}</ul>
    <AddButton />
    {loading && (
      <div className="spinner-layout d-flex align-items-center justify-content-center">
        <Loader type="Triangle" color="orange" height="100" width="100" />
      </div>
    )}
  </div>
);

const mapStateToProps = ({ list: { items, loading } }) => ({
  items,
  loading
});

export default connect(mapStateToProps)(List);
