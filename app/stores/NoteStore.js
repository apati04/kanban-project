import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

// setup
export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [
      {
        id: uuid.v4(),
        task: 'Survive React'
      },
      {
        id: uuid.v4(),
        task: 'clean room'
      }

    ];
  }
  create(note) {
    console.log('create note: ', note);
  }
  update(updatedNote) {
    console.log('update note: ', updatedNote);
  }
  delete(id) {
    console.log('delete note: ', id);
  }
}
