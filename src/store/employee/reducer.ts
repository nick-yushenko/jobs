import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {fetchEmployee} from "@/store/employee/actions";
import {Employee, EmployeeState} from "@/store/employee/types";

const initialState: EmployeeState = {
  loading: false,
  success: false,
  data: undefined,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<Employee>) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchEmployee.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      if (action.payload) {
        state.success = action.payload.success;
        state.data = action.payload.data;
      }

      state.loading = false;
    });
    builder.addCase(fetchEmployee.rejected, state => {
      console.error("Error: не удалось отправить отклик на вакансию");
      state.loading = false;
    });
  },
});
