import { memo, useCallback, useState } from "react";

const Items = memo(function Items({ items, onDelete }) {
  return (
    <>
      <h1>Todo Items</h1>
      <ul>
        {items.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onDelete(task)}> X</button>
          </li>
        ))}
      </ul>
    </>
  );
});

function Todo() {
  const [items, setItems] = useState(["Wash dishes", "Clean table"]);
  const [newItem, setNewItem] = useState("");

  const onDelete = useCallback(
    (task) => setItems(items.filter((item) => item !== task)),
    [items],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleChange = (evt) => setNewItem(evt.target.value);

  return (
    <>
      <Items items={items} onDelete={onDelete} />
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
