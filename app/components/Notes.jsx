import React from 'react';
import Note from './Note';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';
export default ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => (
  <div className="card-body p-0">
    <ul className="list-group-flush p-0 m-0">
      {notes.map(({ id, editing, task }) => (
        <li
          className="list-group-item bg-light border-dark p-1 form-group"
          key={id}
        >
          <Note
            style={{ width: '100%' }}
            className="d-flex rounded note m-1"
            onClick={onNoteClick.bind(null, id)}
            editing={editing}
            id={id}
            onMove={LaneActions.move}
          >
            <Editable
              className="editable form-control"
              editing={editing}
              value={task}
              onEdit={onEdit.bind(null, id)}
            />
            <button className="delete" onClick={onDelete.bind(null, id)}>
              x
            </button>
          </Note>
        </li>
      ))}
    </ul>
  </div>
);
