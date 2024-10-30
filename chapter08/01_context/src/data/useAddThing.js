import { useData } from "./useData.js";

export const useAddThing = () => {
  return useData().actions.addThing;
};
