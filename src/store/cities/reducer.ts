import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CitiesState, City } from "@/store/cities/types";
import { getCities } from "@/store/cities/actions";

export const defaultCity: City = {
  id: 1,
  name: "Москва",
};

const initialState: CitiesState = {
  loading: false,
  current: defaultCity,
  cities: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState: initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<City>) => {
      state.current = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCities.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      if (action.payload) {
        state.cities = action.payload;
        console.log(action.payload);
      }

      state.loading = false;
    });
    builder.addCase(getCities.rejected, state => {
      console.error("Error: не удалось получить список городов");
      state.loading = false;
    });
  },
});
