import { useState } from "react";

const Header = (props) => {
  return (
    <>
      <h1 style={{ fontSize: "2.5rem" }}>{props.text}</h1>
    </>
  );
};
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

const StatisticLine = (props) => {
  return (
    <>
      <td style={{ fontSize: "1.5rem" }}>{props.text}</td>
      <td style={{ fontSize: "1.5rem" }}> {props.value}</td>
    </>
  );
};

function App() {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });
  const total = stats.good + stats.neutral + stats.bad;
  const average = (stats.good - stats.bad) / total;
  const percent = (stats.good / total) * 100;
  return (
    <div style={{ margin: "0.5rem" }}>
      <Header text={"GIVE FEEDBACK"} />
      <Button
        onClick={() => setStats({ ...stats, good: stats.good + 1 })}
        text={"good"}
      />
      <Button
        onClick={() => setStats({ ...stats, neutral: stats.neutral + 1 })}
        text={"neutral"}
      />
      <Button
        onClick={() => setStats({ ...stats, bad: stats.bad + 1 })}
        text={"bad"}
      />
      {total === 0 ? (
        <Header text={"No Feedback Given"} />
      ) : (
        <>
          <Header text={"STATISTICS"} />
          <table>
            <tbody>
              <tr>
                <StatisticLine text={"GOOD"} value={stats.good} />
              </tr>
              <tr>
                <StatisticLine text={"NEUTRAL"} value={stats.neutral} />
              </tr>
              <tr>
                <StatisticLine text={"BAD"} value={stats.bad} />
              </tr>
              <tr>
                <StatisticLine text={"ALL"} value={total} />
              </tr>
              <tr>
                <StatisticLine text={"AVERAGE"} value={average} />
              </tr>
              <tr>
                <StatisticLine text={"POSITIVE"} value={percent} />
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
