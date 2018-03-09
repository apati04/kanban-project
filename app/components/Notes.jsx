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
          style={{ wordBreak: 'break-word' }}
          className="d-flex justify-content-between align-items-center text-left list-group-item bg-light border-dark p-0"
          key={id}
        >
          <Note
            style={{ width: '100%' }}
            className="d-flex rounded m-2 note p-1"
            onClick={onNoteClick.bind(null, id)}
            editing={editing}
            id={id}
            onMove={LaneActions.move}
          >
            <Editable
              style={{ width: '100%' }}
              className="editable m-2 p-1"
              editing={editing}
              value={task}
              onEdit={onEdit.bind(null, id)}
            />
            <button
              className="btn btn-danger delete m-2 p-1"
              onClick={onDelete.bind(null, id)}
            >
              x
            </button>
          </Note>
        </li>
      ))}
    </ul>
  </div>
);
