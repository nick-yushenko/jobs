import { useDispatch } from "react-redux";
import { combineReducers, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { CitiesState } from "@/store/cities/types";
import { citiesSlice } from "@/store/cities/reducer";
import { VacanciesState } from "@/store/vacancies/types";
import { vacanciesSlice } from "@/store/vacancies/reducer";
import { EmployeeState } from "@/store/employee/types";
import { employeeSlice } from "@/store/employee/reducer";

export interface ApplicationStore {
  vacancies: VacanciesState;
  employee: EmployeeState;
  cities: CitiesState;
}

export const store = configureStore({
  reducer: combineReducers<ApplicationStore>({
    vacancies: vacanciesSlice.reducer,
    employee: employeeSlice.reducer,
    cities: citiesSlice.reducer,
  }),
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export function createApplicationStore(): Store<ApplicationStore> {
  return store;
}

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
