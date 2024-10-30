import { useData } from "./useData.js";

export const useAllThings = () => {
  return useData().state.things;
};
