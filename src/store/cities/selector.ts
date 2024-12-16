import { createSelector } from "reselect";
import { ApplicationStore } from "@/store";

export const getCitiesState = createSelector(
  (state: ApplicationStore) => state.cities,
  item => item,
);
