import { useData } from "./useData.js";

export function useThing() {
  return useData().actions.seeThing;
}
