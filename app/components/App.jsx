import React, { Component } from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import connect from '../libs/connect';

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
        {this.props.test}
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onDelete={this.deleteNote}
          onEdit={this.editNote}
          onNoteClick={this.activateNoteEdit}
        />
      </div>
    )
  }
  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id===id) {note.editing = true;}
        return note;
      })
    });
  }
  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id){
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    })
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
export default connect(()=> ({test: 'test'}))(App);
