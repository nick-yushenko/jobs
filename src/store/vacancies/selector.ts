import { createSelector } from "reselect";
import { ApplicationStore } from "@/store";

export const getVacanciesState = createSelector(
  (state: ApplicationStore) => state.vacancies,
  item => item,
);
