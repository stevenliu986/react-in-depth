import { DataContext } from "./DataContext.js";
import { useContext } from "react";

export const useData = () => {
  return useContext(DataContext);
};
