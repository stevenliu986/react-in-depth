import { DataContext } from "./DataContext.js";
import { useContext } from "react";

export const useAllThings = () => {
  return useContext(DataContext).state.things;
};
