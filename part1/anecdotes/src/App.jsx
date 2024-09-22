import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button
        style={{
          margin: "0.5rem",
          fontSize: "1.5rem",
          cursor: "pointer",
          width: "8rem",
        }}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
};

const Anecdotes = (props) => {
  return (
    <div>
      <h1>❝ {props.text} ❞</h1>
      <h2>- has {props.votes} votes.</h2>
    </div>
  );
};

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { text: "If it hurts, do it more often.", votes: 0 },
    {
      text: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { text: "Premature optimization is the root of all evil.", votes: 0 },
    {
      text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    { text: "The only way to go fast, is to go well.", votes: 0 },
  ]);
  const [selected, setSelected] = useState(0);

  const handleVote = (index) => {
    const copy = [...anecdotes];
    copy[index].votes += 1;
    setAnecdotes(copy);
  };

  const HighestVote = () => {
    let highest = 0;
    let index = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (anecdotes[i].votes > highest) {
        highest = anecdotes[i].votes;
        index = i;
      }
    }
    return (
      <Anecdotes text={anecdotes[index].text} votes={anecdotes[index].votes} />
    );
  };

  return (
    <div style={{ padding: "0.5rem" }}>
      <Anecdotes
        text={anecdotes[selected].text}
        votes={anecdotes[selected].votes}
      />
      <Button
        style={{ cursor: "pointer" }}
        text={"VOTE"}
        onClick={() => handleVote(selected)}
      />
      <Button
        style={{ cursor: "pointer" }}
        text={"NEXT →"}
        onClick={() => setSelected(Math.floor(Math.random() * 8))}
      />
      {HighestVote()}
    </div>
  );
};

export default App;
