import personService from "../services/person";
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
          if (persons.some((person) => person.name === newName)) {
            if (
              window.confirm(
                `${newName} is already added to phonebook. replace the old number with a new one?`
              )
            ) {
              const person = persons.find((person) => person.name === newName);
              personService
                .update(person.id, { ...person, number: newNumber })
                .then((returnedPerson) => {
                  // console.log(returnedPerson);
                  setPersons(
                    persons.map((person) =>
                      person.id !== returnedPerson.id ? person : returnedPerson
                    )
                  );
                  setNewName("");
                  setNewNumber("");
                });
            }
            return;
          }
          personService
            .create({
              name: newName,
              number: newNumber,
              id: String(persons.length + 1),
            })
            .then((returnedPerson) => {
              setPersons(persons.concat(returnedPerson));
              setNewName("");
              setNewNumber("");
            });
        }}
      >
        <div>
          name: <br />
          <input
            type="text"
            value={newName}
            required
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <div>
            number: <br />
            <input
              type="text"
              value={newNumber}
              required
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
