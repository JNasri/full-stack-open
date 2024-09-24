import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const History = (props) => {
  return props.allClicks.length === 0 ? (
    <div> Press any button to start!</div>
  ) : (
    <div>
      {" "}
      button press history: {props.allClicks.join(" ")} <br /> and the total is{" "}
      {props.total}{" "}
    </div>
  );
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const newLeft = left + 1;
    setLeft(newLeft);
    setTotal(newLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const newRight = right + 1;
    setRight(newRight);
    setTotal(left + newRight);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text={"LEFT"} />
      <Button onClick={handleRightClick} text={"RIGHT"} />
      {right}
      <History allClicks={allClicks} total={total} />
    </div>
  );
};

export default App;
