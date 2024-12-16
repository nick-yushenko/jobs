import { createSlice } from "@reduxjs/toolkit";
import { CurrencyState } from "@/store/currencies/types";
import { getCurrencies } from "@/store/currencies/actions";

const initialState: CurrencyState = {
  loading: false,
  currencies: [],
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrencies.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      if (action.payload) {
        state.currencies = action.payload;
      }

      state.loading = false;
    });
    builder.addCase(getCurrencies.rejected, state => {
      console.error("Error: не удалось получить список валют");
      state.loading = false;
    });
  },
});
