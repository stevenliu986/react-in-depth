import { createContext, useState } from "react";
import Buttons from "./Buttons.tsx";

interface IDarkMode {
  mode: "dark" | "light";
  toggle: () => void;
}

export const DarkModeContext = createContext<IDarkMode | null>(null);

function App() {
  const [mode, setMode] = useState<"dark" | "light">("light");
  const toggle = () => {
    setMode((v) => (v === "dark" ? "light" : "dark"));
  };
  const contextValue = { mode, toggle };
  return (
    <DarkModeContext.Provider value={contextValue}>
      <Buttons />
    </DarkModeContext.Provider>
  );
}

export default App;
