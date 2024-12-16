import { createSelector } from "reselect";
import { ApplicationStore } from "@/store";

export const getOfficesState = createSelector(
  (state: ApplicationStore) => state.offices,
  item => item,
);
