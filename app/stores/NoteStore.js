import uuid from 'uuid';
// setup
export default class NoteStore {
  constructor() {
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
}
