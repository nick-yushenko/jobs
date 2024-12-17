import { createSelector } from "reselect";
import { ApplicationStore } from "@/store";

export const getEmployeeState = createSelector(
  (state: ApplicationStore) => state.employee,
  item => item,
);
