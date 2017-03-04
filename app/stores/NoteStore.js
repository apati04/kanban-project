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
    this.setState({
      notes: this.notes.concat(note)
    })
  }
  update(updatedNote) {

  }
  delete(id) {
    console.log('delete note: ', id);
    this.setState({
      notes: this.notes.filter(n => n.id !== id)
    })
  }
}
