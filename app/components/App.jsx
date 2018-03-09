import React from 'react';
import uuid from 'uuid';
import { compose } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({ LaneActions, lanes }) => {
  const addLane = () => {
    LaneActions.create({
      id   : uuid.v4(),
      name : 'Edit title...'
    });
  };
  return (
    <div>
      <nav style={{ opacity: '0.98' }} className="navbar navbar-dark bg-danger">
        <a className="navbar-brand" href="#">
          <h3>Post-it Board</h3>
        </a>
        <div className="nav-item">
          <h4 className="lead text-white">by Andrew Patipaksiri</h4>
        </div>
      </nav>
      <div className="container-fluid d-flex justify-content-start align-items-top mt-5">
        <button
          className="btn btn-info bmd-btn-fab text-white"
          onClick={addLane}
        >
          +
        </button>
        <Lanes lanes={lanes} />
      </div>
    </div>
  );
};

export default compose(
  DragDropContext(HTML5Backend),
  connect(({ lanes }) => ({ lanes }), { LaneActions })
)(App);
