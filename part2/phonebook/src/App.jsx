import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import PersonForm from "../components/PersonForm";
import Numbers from "../components/Numbers";
import personService from "../services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((People) => {
      setPersons(People);
    });
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  );
};

export default App;
