import { createSlice } from "@reduxjs/toolkit";
import { OfficeState } from "@/store/offices/types";
import { getOffices } from "@/store/offices/actions";

const initialState: OfficeState = {
  loading: false,
  offices: [],
};

export const officesSlice = createSlice({
  name: "offices",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOffices.pending, state => {
      state.loading = true;
    });
    builder.addCase(getOffices.fulfilled, (state, action) => {
      if (action.payload) {
        state.offices = action.payload;
      }

      state.loading = false;
    });
    builder.addCase(getOffices.rejected, state => {
      console.error("Error: не удалось получить список офисов");
      state.loading = false;
    });
  },
});
