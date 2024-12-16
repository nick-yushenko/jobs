import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";
import { City } from "@/store/cities/types";

export const getCities = createAsyncThunk("cities/getCities", async () => {
  try {
    const result = await callApiFn<City[]>(() =>
      apiFetch({
        url: `${process.env.VITE_APP_API_URL}/v1/order/city-list`,
        options: {
          method: "GET",
        },
      }),
    );
    return result;
  } catch (e) {
    throw e;
  }
});
