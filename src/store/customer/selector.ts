import { createSelector } from "reselect";
import { ApplicationStore } from "@/store";

export const getCustomerState = createSelector(
  (state: ApplicationStore) => state.customer,
  item => item,
);
