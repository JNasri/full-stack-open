import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <Display counter={counter} />
      <Button onClick={() => setCounter(counter + 1)} text={"ADD"} />
      <Button onClick={() => setCounter(0)} text={"RESET"} />
      <Button onClick={() => setCounter(counter - 1)} text={"SUB"} />
    </div>
  );
};

export default App;
