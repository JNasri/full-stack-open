const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello world! This is {props.name} and I am {props.age}
      </p>
    </>
  );
};

const App = () => {
  const now = new Date();
  return (
    <>
      <h1>Greetings!</h1>
      <Hello name="Ya boi" age="20" />
      <Hello name="Ya boiiiiiiiiiii" />
    </>
  );
};

export default App;
