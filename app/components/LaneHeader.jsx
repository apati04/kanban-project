import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default connect(() => ({}), {
  NoteActions,
  LaneActions
})(({ lane, LaneActions, NoteActions, ...props }) => {
  const addNote = (e) => {
    e.stopPropagation();
    const noteId = uuid.v4();
    NoteActions.create({
      id   : noteId,
      task : 'New task'
    });
    LaneActions.attachToLane({
      laneId : lane.id,
      noteId
    });
  };
  const activateLaneEdit = () => {
    LaneActions.update({
      id      : lane.id,
      editing : true
    });
  };
  const editName = (name) => {
    LaneActions.update({
      id      : lane.id,
      name,
      editing : false
    });
  };
  const deleteLane = (e) => {
    // avoid bubbling to edit;
    e.stopPropagation();
    LaneActions.delete(lane.id);
  };
  return (
    <div
      className="d-flex justify-content-between card-header bg-info rounded-top"
      onClick={activateLaneEdit}
      {...props}
    >
      <Editable
        className="lead align-self-center"
        editing={lane.editing}
        value={lane.name}
        onEdit={editName}
      />

      <div className="delete">
        <button
          style={{ border: 0 }}
          className="btn btn-light m-0"
          onClick={deleteLane}
        >
          X
        </button>
      </div>
    </div>
  );
});
