import { useState } from "react";
import Note from "../components/Note";

const App = (props) => {
  const [notes, setNote] = useState(props.notes);
  const [value, setValue] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} content={note.content} />
        ))}
      </ul>
      <button onClick={() => setShowAll(!showAll)}>
        {"show "}
        {showAll ? "important" : "all"}
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const noteObject = {
            content: value,
            important: Math.random() < 0.5,
            id: String(notes.length + 1),
          };
          setNote(notes.concat(noteObject));
          setValue("");
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
