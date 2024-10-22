import { useContext } from "react";
import { DarkModeContext } from "./App.tsx";

function Buttons() {
  const contextValue = useContext(DarkModeContext);
  if (!contextValue) {
    return null;
  }
  const { mode, toggle } = contextValue;
  const style = {
    color: mode === "dark" ? "white" : "black",
    background: mode === "dark" ? "black" : "white",
  };
  return (
    <>
      <button style={style}>Change</button>
      <button onClick={toggle}>Toggle tag</button>
    </>
  );
}

export default Buttons;
