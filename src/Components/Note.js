import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';



function Note() {
    // State Initialization
  const [notes, setNotes] = useState([]);

    // Add Note Function
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />      
         {/* //Child Components Noteform ,Notelist */}
    </div>
  );
}
//Note parant Elment
export default Note;
