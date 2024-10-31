import { useState } from "react";
import { Thing } from "./Thing.jsx";
import { useAddThing, useAllThings, useCurrentThing, useThing } from "../data";

export function AllThings() {
  const [isAddThing, setIsAddThing] = useState(false);
  const [newThing, setNewThing] = useState("");
  const allThings = useAllThings();
  const addThing = useAddThing();
  const seeThing = useThing();
  const currentThing = useCurrentThing();

  const onChange = (evt) => setNewThing(evt.target.value);

  const handleClick = () => {
    seeThing("thing");
    console.log("currentThing :: ", currentThing);
    addThing(newThing);
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
