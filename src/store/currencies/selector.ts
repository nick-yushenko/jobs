import { createSelector } from "reselect";
import { ApplicationStore } from "@/store";

export const getCurrenciesState = createSelector(
  (state: ApplicationStore) => state.currencies,
  item => item,
);
