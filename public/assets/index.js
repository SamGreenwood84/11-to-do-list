    // Function to save a new note
    function saveNote() {
        const title = document.getElementById('noteTitle').value;
        const text = document.getElementById('noteText').value;
  
        // Send a POST request to create a new note
        fetch('/api/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, text }),
        })
        .then(response => response.json())
        .then(newNote => {
          // Update the UI with the new note
          const noteList = document.getElementById('noteList');
          const listItem = document.createElement('li');
          listItem.textContent = `${newNote.title}: ${newNote.text}`;
          noteList.appendChild(listItem);
        });
      }
  
      // Function to load existing notes when the page loads
      document.addEventListener('DOMContentLoaded', () => {
        fetch('/api/notes')
        .then(response => response.json())
        .then(existingNotes => {
          // Update the UI with existing notes
          const noteList = document.getElementById('noteList');
          existingNotes.forEach(note => {
            const listItem = document.createElement('li');
            listItem.textContent = `${note.title}: ${note.text}`;
            noteList.appendChild(listItem);
          });
        });
      });