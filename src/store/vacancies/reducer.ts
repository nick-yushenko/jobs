import { createSlice } from "@reduxjs/toolkit";
import {VacanciesState} from "@/store/vacancies/types";
import {getVacancies} from "@/store/vacancies/actions";

const initialState: VacanciesState = {
  loading: false,
  vacancies: [],
};

export const vacanciesSlice = createSlice({
  name: "offices",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVacancies.pending, state => {
      state.loading = true;
    });
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      if (action.payload) {
        state.vacancies = action.payload;
      }

      state.loading = false;
    });
    builder.addCase(getVacancies.rejected, state => {
      console.error("Error: не удалось получить список доступных вакансий");
      state.loading = false;
    });
  },
});
