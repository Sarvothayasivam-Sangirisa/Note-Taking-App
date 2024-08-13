import React, { useState } from 'react';

 // State Initialization
function NoteForm({ addNote }) {
  const [note, setNote] = useState('');

// add function 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };
 // onSubmit button click papanka handleSubmit la kudutha function nadakum
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter Your  note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
