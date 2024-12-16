import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";
import { Currency } from "@/store/currencies/types";

export const getCurrencies = createAsyncThunk(
  "currencies/getCurrencies",
  async () => {
    try {
      const result = await callApiFn<Currency[]>(() =>
        apiFetch({
          url: `${process.env.VITE_APP_API_URL}/v1/order/currency-list`,
          options: {
            method: "GET",
          },
        }),
      );
      return result;
    } catch (e) {
      throw e;
    }
  },
);
