import React, { Component } from 'react';
import Notes from './Notes';
import uuid from 'uuid';

class App extends Component {
  state = {
    notes: [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ]
  }
  render() {
    const { notes } = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    )
  }

  addNote = () => {
    this.setState({
      notes: [...this.state.notes,
        {
        id: uuid.v4(),
        task: 'New Task'
      }]
    });
  }
  deleteNote = (id, e) => {
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
}
export default App;
