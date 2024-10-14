import { useState } from "react";

// item组件
function Items({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

// Todo组件
function Todo() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(["Clean gutter", "Wash dishes"]);

  const onSubmit = (evt) => {
    if (newItem.trim() === "") {
      return;
    }
    setItems((items) => items.concat([newItem]));
    setNewItem("");
    evt.preventDefault();
  };

  const onChange = (evt) => setNewItem(evt.target.value);
  return (
    <main>
      <form onSubmit={onSubmit}>
        <input type="text" value={newItem} onChange={onChange} />
        <button>Add task</button>
      </form>
      <Items items={items} />
    </main>
  );
}

function App() {
  return <Todo />;
}

export default App;
