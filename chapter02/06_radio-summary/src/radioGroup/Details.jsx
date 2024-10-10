import { useContext } from "react";
import { RadioOptionContext } from "./contexts.js";

export function Details({ children }) {
  const isSelected = useContext(RadioOptionContext);
  return isSelected ? children : null;
}
