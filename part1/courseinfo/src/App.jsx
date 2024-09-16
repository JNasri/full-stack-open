const Header = (props) => {
  return (
    <>
      <h1>Course Name: {props.name} </h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <h2>
        {props.part} - {props.exercise} Hours
      </h2>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <h1>Total Number of exercises: {props.total} </h1>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  return (
    <div style={{ margin: "1rem" }}>
      <Header name={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercise1={exercise1}
        exercise2={exercise2}
        exercise3={exercise3}
      />
      <Total total={exercise1 + exercise2 + exercise3} />
    </div>
  );
};

export default App;
