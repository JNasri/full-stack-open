const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  return (
    <>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            persons.some(
              (person) => person.name === newName || person.number === newNumber
            )
          ) {
            alert(`name or number is already added to phonebook`);
            return;
          }
          setPersons([
            ...persons,
            { name: newName, number: newNumber, id: persons.length + 1 },
          ]);
          setNewName("");
          setNewNumber("");
        }}
      >
        <div>
          name: <br />
          <input
            type="text"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <div>
            number: <br />
            <input
              type="text"
              value={newNumber}
              onChange={(e) => {
                setNewNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
