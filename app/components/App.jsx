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
      name : 'Add title...'
    });
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-warning">
        <a className="navbar-brand" href="#">
          Sticky Board by Andrew Patipaksiri
        </a>
      </nav>
      <button className="btn btn-warning bmd-btn-fab" onClick={addLane}>
        +
      </button>
      <Lanes lanes={lanes} />
    </div>
  );
};

export default compose(
  DragDropContext(HTML5Backend),
  connect(({ lanes }) => ({ lanes }), { LaneActions })
)(App);
