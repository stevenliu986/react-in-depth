import { memo, useState } from "react";

const Items = memo(function Items({ items }) {
  return (
    <>
      <h1>Todo Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
});

function Todo() {
  const [items, setItems] = useState(["Wash dishes", "Clean table"]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleChange = (evt) => setNewItem(evt.target.value);

  return (
    <>
      <Items items={items} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={newItem} onChange={(e) => handleChange(e)} />
        <button>Add</button>
      </form>
    </>
  );
}

function App() {
  return <Todo />;
}

export default App;
