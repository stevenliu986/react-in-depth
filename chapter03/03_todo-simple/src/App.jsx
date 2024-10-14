import { useState } from "react";

function Items({ items }) {
  return (
    <>
      <h2>Todo items</h2>
      <ul>
        {items.map((item) => {
          <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}

function Todo() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const onSubmit = (evt) => {
    setItems((items) => items.concat([newItem]));
    setNewItem("");
    evt.preventDefault();
  };

  const onChange = (evt) => setNewItem(evt.target.value);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={newItem} onChange={onChange} />
        <button>Add todo item</button>
      </form>
      <Items items={items} />
    </>
  );
}

function App() {
  return <Todo />;
}

export default App;
