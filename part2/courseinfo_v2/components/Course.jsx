import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const sum = course.parts.reduce((base, part) => base + part.exercises, 0);
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <h3>Total is {sum} exercises</h3>
    </>
  );
};

export default Course;
