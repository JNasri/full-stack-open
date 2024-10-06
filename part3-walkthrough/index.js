const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

// Catch the favicon.ico request and send a 204 No Content status:
app.get("/favicon.ico", (req, res) => res.status(204));

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
  console.log("main route");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
  console.log("all notes route");
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).send("<h1>NOT FOUND</h1>");
  }
});

app.get("/*", (request, response) => {
  response.send("<h1>WRONG PAGE!!!!</h1>");
});

app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  const note = request.body;

  if (!note || !note.content) {
    return response.status(400).json({
      error: "content is missing",
    });
  }

  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;

  const newNote = {
    id: (maxId + 1).toString(),
    content: note.content,
    important: Boolean(note.important) || false,
  };

  notes = [...notes, newNote];

  response.status(201).json(newNote);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
