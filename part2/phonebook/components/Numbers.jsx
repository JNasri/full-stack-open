import personService from "../services/person";

const Numbers = ({ persons, setPersons, filter }) => {
  const deletePerson = (id) => {
    if (
      window.confirm(
        `Delete ${persons.find((person) => person.id === id).name}?`
      )
    ) {
      personService.deletePerson(id).then((res) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };
  return (
    <>
      {filter === ""
        ? persons.map((person) => (
            <div key={person.name}>
              {person.name} ({person.number}){" "}
              <button onClick={() => deletePerson(person.id)}>DELETE</button>
            </div>
          ))
        : persons
            .filter((person) =>
              person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((person) => (
              <div key={person.name}>
                {person.name} ({person.number}){" "}
                <button onClick={() => deletePerson(person.id)}>DELETE</button>
              </div>
            ))}
    </>
  );
};

export default Numbers;
