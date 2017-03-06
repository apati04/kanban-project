import React from 'react';
import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import Notes from './Notes';
import LaneActions from '../actions/LaneActions';
import LaneHeader from './LaneHeader';

const Lane = ({
  connectDropTarget, lane, notes, LaneActions, NoteActions, ...props
}) => {
  const editNote = (id, task) => {
    NoteActions.update({id, task, editing: false});
  };
  const deleteNote = (noteId, e) => {
    e.stopPropagation();
    NoteActions.delete(noteId);
    LaneActions.detachfromLane({
      laneId: lane.id,
      noteId
    })
  };


  const activateNoteEdit = id => {
    NoteActions.update({id, editing: true});
  };
  return connectDropTarget(
    <div {...props}>
      <LaneHeader lane={lane} />
      <Notes
        notes={selectNotesByids(notes, lane.notes)}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={deleteNote} />
    </div>
  );
  function selectNotesByids(allNotes, noteIds=[]) {
    return noteIds.reduce((notes,id) => {
      return notes.concat(allNotes.filter(note => note.id === id))
    }, []);
  }
}
const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if(!targetProps.lane.notes.length) {
      LaneActions.attachToLane({
        laneId: targetProps.lane.id,
        noteId: sourceId
      })
    }
  }
}
export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  connect(({notes}) => ({notes}), {NoteActions, LaneActions})
)(Lane);
