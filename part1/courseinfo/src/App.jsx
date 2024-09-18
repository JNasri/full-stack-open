const Header = (props) => {
  return (
    <>
      <h1>Course Name: {props.name.name} </h1>
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
      <Part
        part={props.parts.parts[0].name}
        exercise={props.parts.parts[0].exercises}
      />
      <Part
        part={props.parts.parts[1].name}
        exercise={props.parts.parts[1].exercises}
      />
      <Part
        part={props.parts.parts[2].name}
        exercise={props.parts.parts[2].exercises}
      />
    </>
  );
};

const Total = (props) => {
  const total =
    props.parts.parts[0].exercises +
    props.parts.parts[1].exercises +
    props.parts.parts[2].exercises;

  return (
    <>
      <h1>Total Number of exercises: {total} </h1>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div style={{ margin: "1rem" }}>
      <Header name={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default App;
