import { useState } from "react";
import { Thing } from "./Thing.jsx";
import { useAddThing, useAllThings } from "../data";

export function AllThings() {
  const [isAddThing, setIsAddThing] = useState(false);
  const [newThing, setNewThing] = useState("");
  // const [allThings, setAllThings] = useState([]);
  const allThings = useAllThings();
  const addThing = useAddThing();
  const onChange = (evt) => setNewThing(evt.target.value);

  const handleClick = () => {
    console.log("handleClick called");
    addThing(newThing);
    // setAllThings((items) => items.concat(newThing));
    setNewThing("");
    setIsAddThing(false);
  };

  return (
    <>
      <h1>All Things</h1>
      {allThings &&
        allThings.map((item) => <Thing key={item.id} thing={item.name} />)}
      {isAddThing ? (
        <div>
          <input type="text" value={newThing} onChange={onChange} />
          <button onClick={handleClick}>Add</button>
          <button onClick={() => setIsAddThing((v) => !v)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsAddThing((v) => !v)}>Add a thing</button>
      )}
    </>
  );
}
