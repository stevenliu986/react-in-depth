import { DataContext } from "./DataContext.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

const STORAGE_KEY = "100-things-context";
const INITIAL_STATE = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  things: [],
  currentThing: null,
};

export function DataProvider({ children }) {
  const [things, setThings] = useState(INITIAL_STATE.things);
  const [currentThing, setCurrentThing] = useState(INITIAL_STATE.currentThing);
  useEffect(
    () =>
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          things,
          currentThing,
        }),
      ),
    [things, currentThing],
  );

  const addThing = useCallback(
    (name) =>
      setThings((ts) =>
        ts.concat([
          {
            id: uuid(),
            name,
            done: [],
          },
        ]),
      ),
    [],
  );

  const seeThing = setCurrentThing;

  const contextValue = useMemo(
    () => ({
      state: {
        things,
        currentThing,
      },
      actions: {
        addThing,
        seeThing,
      },
    }),
    [things, currentThing, addThing, seeThing],
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
