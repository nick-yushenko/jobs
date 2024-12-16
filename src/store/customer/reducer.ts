import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCustomer } from "@/store/customer/actions";
import { Customer, CustomerState } from "@/store/customer/types";

const initialState: CustomerState = {
  loading: false,
  success: false,
  data: undefined,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<Customer>) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCustomer.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      if (action.payload) {
        state.success = action.payload.success;
        state.data = action.payload.data;
        // необходимо для повторной отправки. Если отправили один раз, то согласны отправить еще раз
        if (state.data) state.data.user_aggrement = 1;
      }

      state.loading = false;
    });
    builder.addCase(fetchCustomer.rejected, state => {
      console.error("Error: не удалось отправить заказ");
      state.loading = false;
    });
  },
});
