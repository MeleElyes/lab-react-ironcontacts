import "./App.css";
import contact from "./contacts.json";
import { useState, useEffect } from "react";
import FiveContact from "./Component/FiveContact";

const App = () => {
  const [contacts, setContact] = useState([]);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(false);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  console.log(count2);

  useEffect(() => {
    setContact(contact.slice(0, 5));
  }, []);

  useEffect(() => {
    count2 > 0 &&
      setContact(
        contacts.sort((a, b) =>
          a.name.substring(a.name.indexOf(" "), a.name.length) >
          b.name.substring(b.name.indexOf(" "), b.name.length)
            ? 1
            : -1
        )
      );
  }, [count2, contacts]);

  useEffect(() => {
    count3 > 0 &&
      setContact(
        contacts.sort((a, b) =>
          a.popularity < b.popularity ? 1 : -1
        )
      );
  }, [count3, contacts]);

  const CheckDoubleContact = () => {
    let i = 0;
    do {
      i = Math.floor(Math.random() * contact.length);
    } while (contacts.includes(contact[i]));

    return i;
  };

  const AddOneContact = () => {
    setCount(count + 1);
    setContact((contacts) => [...contacts, contact[CheckDoubleContact()]]);
  };

  console.log(contacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="button">
      <button onClick={() => count < contact.length - 5 ? AddOneContact() : setLimit(true)}>
        <span>Add Contact</span>
      </button>

      <button onClick={() => setCount2(count2 + 1)}>
        <span>Sort by name</span>
      </button>
      <button onClick={() => setCount3(count3 + 1)}>
        <span>Sort by popularity</span>
      </button>
      </div>
      {limit && <h3>Tous les acteurs sont affichés</h3>}
      <table className="tableau">
        <tbody>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Action</td>
          </tr>
          {contacts.length <= 5 && (
            <FiveContact contacts={contacts} setContact={setContact} />
          )}

          {contacts.length > 5 && (
            <FiveContact contacts={contacts} setContact={setContact} />
          )}
        </tbody>
      </table>
    </div>
  );
};
export default App;
