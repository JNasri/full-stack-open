import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import PersonForm from "../components/PersonForm";
import Numbers from "../components/Numbers";
import personService from "../services/person";
import Notification from "../components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [styleToggle, setStyleToggle] = useState(true);

  useEffect(() => {
    personService.getAll().then((People) => {
      setPersons(People);
    });
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <h2>Phonebook</h2>
      <Notification msg={message} styleToggle={styleToggle} />
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setMessage={setMessage}
        setStyleToggle={setStyleToggle}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  );
};

export default App;
