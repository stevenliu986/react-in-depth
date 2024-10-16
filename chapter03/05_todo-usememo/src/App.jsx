import { useMemo, useState } from "react";

function Todo() {
  const [items, setItems] = useState(["Clean gutter", "Do dishes"]);
  const [newItem, setNewItem] = useState("");

  const onSubmit = (evt) => {
    setItems((items) => items.concat([newItem]));
    setNewItem("");
    evt.preventDefault();
  };

  const memoItems = useMemo(
    () => (
      <>
        <h2>Todo items</h2>
        <ul>
          {items.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </>
    ),
    [items],
  );

  const onChange = (evt) => setNewItem(evt.target.value);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={newItem} onChange={onChange} />
        <button>Add todo item</button>
      </form>
      {memoItems}
    </>
  );
}

function App() {
  return <Todo />;
}

export default App;
