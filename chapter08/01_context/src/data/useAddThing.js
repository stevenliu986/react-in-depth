import { DataContext } from "./DataContext.js";
import { useContext } from "react";

export const useAddThing = () => {
  return useContext(DataContext).actions.addThing;
};
