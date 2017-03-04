import React, { Component } from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends Component {
  render() {
    const { notes } = this.props;

    return (
      <div>
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
export default connect(({notes})=> ({notes}), { NoteActions })(App);
// gives us this.props.NoteActions.create 
