const Numbers = ({ persons, filter }) => {
  return (
    <>
      {filter === ""
        ? persons.map((person) => (
            <div key={person.name}>
              {person.id}- {person.name} ({person.number})
            </div>
          ))
        : persons
            .filter((person) =>
              person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((person) => (
              <div key={person.name}>
                {person.id}- {person.name} ({person.number})
              </div>
            ))}
    </>
  );
};

export default Numbers;
