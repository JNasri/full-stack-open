import { useEffect, useState } from "react";
import axios from "axios";
import Note from "../components/Note";

const App = () => {
  const [notes, setNote] = useState([]);
  const [value, setValue] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");

      setNote(response.data);
    });
  }, []);

  console.log("render", notes.length, "notes");
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
