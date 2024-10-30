import { useState } from "react";
import { Thing } from "./Thing.jsx";

export function AllThings() {
  const [addThing, setAddThing] = useState(false);
  const [thing, setThing] = useState("");
  const [allThings, setAllThings] = useState([]);
  const onChange = (evt) => setThing(evt.target.value);

  const handleClick = () => {
    setAllThings((allThings) => allThings.concat(thing));
    setThing("");
  };
  return (
    <>
      <h1>All Things</h1>
      {allThings && allThings.map((item) => <Thing key={item} thing={item} />)}
      {addThing ? (
        <div>
          <input type="text" value={thing} onChange={onChange} />
          <button onClick={handleClick}>Add</button>
          <button onClick={() => setAddThing((v) => !v)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setAddThing((v) => !v)}>Add a thing</button>
      )}
    </>
  );
}
