import { useEffect, useState } from "react";
import Note from "../components/Note";
import noteService from "../services/notes";
import Notification from "../components/Notification";

const App = () => {
  const [notes, setNote] = useState([]);
  const [value, setValue] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNote(initialNotes);
    });
  }, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNote(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setMessage(`Note '${note.content}' was already removed from server`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setNote(notes.filter((n) => n.id !== id));
      });
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <Notification msg={message} />
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <button onClick={() => setShowAll(!showAll)}>
        {"show "}
        {showAll ? "important" : "all"}
      </button>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const noteObject = {
            content: value,
            important: Math.random() < 0.5,
            id: String(notes.length + 1),
          };
          noteService.create(noteObject).then((returnedNote) => {
            console.log(returnedNote);
            setNote(notes.concat(returnedNote));
            setValue("");
          });
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
