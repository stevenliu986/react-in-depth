import { useData } from "./useData.js";

export function useCurrentThing() {
  return useData().state.currentThing;
}
